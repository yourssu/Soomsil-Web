import { useState } from 'react';

import { STORAGE_KEYS } from '@/constants/storage.constant.ts';
import {
  getAuthVerificationCheck,
  postAuthVerificationEmail,
} from '@/home/apis/authVerification.ts';
import { EmailAuthProps } from '@/home/components/SignupContents/EmailAuth/EmailAuth.type.ts';
import { useSecondTimer } from '@/hooks/useSecondTimer.ts';

export const useEmailAuth = ({ onConfirm, email }: EmailAuthProps) => {
  const [authed, setAuthed] = useState(true);
  const { leftTime, isTimerEnd, resetTimer } = useSecondTimer(8 * 60);
  const [error, setError] = useState<string>('');
  const [emailSending, setEmailSending] = useState(false);

  const sendAuthenticationMail = async () => {
    setEmailSending(true);
    const { data } = await postAuthVerificationEmail({ email: email, verificationType: 'SIGN_UP' });
    setEmailSending(false);
    setAuthed(!!data);
    setError(!data ? '인증 메일 재전송에 실패했습니다.' : '');
    resetTimer();
  };

  const onClickNext = async () => {
    const session = sessionStorage.getItem(STORAGE_KEYS.EMAIL_AUTH_SESSION_TOKEN);
    if (!session) return;

    const res = await getAuthVerificationCheck({ session });

    if (res.data) {
      if (res.data.isVerified) onConfirm();
      else setError('이메일 인증을 완료해주세요.');
    } else if (res.error) {
      setError(res.error.response?.data.message || '이메일 인증 확인에 실패했습니다.');
    }
  };

  return { authed, leftTime, isTimerEnd, error, emailSending, sendAuthenticationMail, onClickNext };
};
