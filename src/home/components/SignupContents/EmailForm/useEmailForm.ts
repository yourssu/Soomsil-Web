import { useState } from 'react';

import { isEmail } from '@yourssu/utils';

import { postAuthVerificationEmail } from '@/home/apis/authVerification.ts';
import { EmailFormProps } from '@/home/components/SignupContents/EmailForm/EmailForm.type.ts';
import { useParseFullEmail } from '@/hooks/useParseFullEmail';

export const useEmailForm = ({ onConfirm }: EmailFormProps) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const parseFullEmail = useParseFullEmail();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onEmailSubmit = async () => {
    const fullEmail = parseFullEmail(email);

    if (!isEmail(fullEmail)) {
      setEmailError('이메일 형식을 다시 확인해주세요.');
      return;
    }

    const res = await postAuthVerificationEmail({ email: fullEmail, verificationType: 'SIGN_UP' });
    if (res.data) {
      onConfirm(fullEmail);
    } else {
      setEmailError(res.error?.response?.data.message || '이메일을 다시 확인해주세요.');
    }
  };

  return { email, emailError, onChange, onEmailSubmit };
};
