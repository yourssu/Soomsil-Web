import { useState, ChangeEvent } from 'react';

import { isEmail } from '@yourssu/utils';
import { AxiosError } from 'axios';

import { EmailFormProps } from '@/home/components/SignupContents/EmailForm/EmailForm.type';
import { usePostAuthVerificationEmail } from '@/home/hooks/usePostAuthVerificationEmail';
import { AuthErrorData } from '@/home/types/Auth.type';
import { useParseFullEmail } from '@/hooks/useParseFullEmail';

export const useEmailForm = ({ onConfirm }: EmailFormProps) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string>('');
  const parseFullEmail = useParseFullEmail();

  const postAuthVerificationEmailMutation = usePostAuthVerificationEmail();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onEmailSubmit = async () => {
    const fullEmail = parseFullEmail(email);

    if (!isEmail(fullEmail)) {
      setEmailError('이메일 형식을 다시 확인해주세요.');
      return;
    }

    setEmailError('');

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
