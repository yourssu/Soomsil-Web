import { useForm } from 'react-hook-form';

import { postAuthVerificationEmail } from '@/home/apis/postAuthVerificationEmail';
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
    formState: { errors, isSubmitting },
    setError,
  } = useForm<FormData>({
    defaultValues: { email },
  });

  const localEmail = watch('email');
  const parseFullEmail = useParseFullEmail();
  const fullEmail = parseFullEmail(localEmail);

  const handleOnSubmit = async (data: FormData) => {
    const response = await postAuthVerificationEmail({
      email: fullEmail,
      verificationType: 'PASSWORD',
    });

    if (response.error) {
      setError('email', { type: 'manual', message: '존재하지 않는 이메일입니다.' });
    } else {
      onConfirm(data.email);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    handleOnSubmit,
  };
};
