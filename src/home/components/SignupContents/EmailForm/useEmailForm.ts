import { useState } from 'react';

import { AxiosError } from 'axios';

import { usePostAuthVerificationEmail } from '@/home/apis/authVerification.ts';
import { EmailFormProps } from '@/home/components/SignupContents/EmailForm/EmailForm.type.ts';
import { AuthErrorData } from '@/home/types/Auth.type';
import { useParseFullEmail } from '@/hooks/useParseFullEmail';

export const useEmailForm = ({ onConfirm }: EmailFormProps) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const parseFullEmail = useParseFullEmail();

  const postAuthVerificationEmailMutation = usePostAuthVerificationEmail();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onEmailSubmit = async () => {
    const fullEmail = parseFullEmail(email);

    await postAuthVerificationEmailMutation.mutateAsync(
      { email: fullEmail, verificationType: 'SIGN_UP' },
      {
        onSuccess: () => {
          onConfirm(fullEmail);
        },
        onError: (error: AxiosError<AuthErrorData>) => {
          setEmailError(error.response?.data.message || '이메일을 다시 확인해주세요.');
        },
      }
    );
  };

  return { email, emailError, onChange, onEmailSubmit };
};
