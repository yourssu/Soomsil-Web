import { useState } from 'react';

import { postAuthVerificationEmail } from '@/home/apis/authVerification.ts';
import { EmailFormProps } from '@/home/components/SignupContents/EmailForm/EmailForm.type.ts';
import { useFullEmail } from '@/hooks/useFullEmail';

export const useEmailForm = ({ onConfirm }: EmailFormProps) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const [emailSending, setEmailSending] = useState(false);
  const fullEmail = useFullEmail(email);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onEmailSubmit = async () => {
    setEmailSending(true);

    const res = await postAuthVerificationEmail({ email: fullEmail, verificationType: 'SIGN_UP' });
    if (res.data) {
      onConfirm(fullEmail);
    } else {
      setEmailError(res.error?.response?.data.message || '이메일을 다시 확인해주세요.');
    }

    setEmailSending(false);
  };

  return { email, emailError, emailSending, onChange, onEmailSubmit };
};