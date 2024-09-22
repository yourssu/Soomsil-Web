import { useForm } from 'react-hook-form';

import { usePostAuthVerificationEmail } from '@/home/hooks/usePostAuthVerificationEmail';
import { useParseFullEmail } from '@/hooks/useParseFullEmail';

interface EmailInputProps {
  email: string;
  onConfirm: (email: string) => void;
}

interface FormData {
  email: string;
}

export const useEmailInputForm = ({ email, onConfirm }: EmailInputProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    defaultValues: { email },
  });

  const localEmail = watch('email');
  const parseFullEmail = useParseFullEmail();
  const fullEmail = parseFullEmail(localEmail);
  const postAuthVerificationEmailMutation = usePostAuthVerificationEmail();

  const handleOnSubmit = async (data: FormData) => {
    postAuthVerificationEmailMutation.mutate(
      { email: fullEmail, verificationType: 'PASSWORD' },
      {
        onSuccess: () => {
          onConfirm(data.email);
        },
        onError: () => {
          setError('email', {
            type: 'manual',
            message: '존재하지 않는 이메일입니다.',
          });
        },
      }
    );
  };

  const isPending = postAuthVerificationEmailMutation.isPending;

  return {
    register,
    handleSubmit,
    errors,
    handleOnSubmit,
    isPending,
  };
};
