import { useState } from 'react';

import { AxiosError } from 'axios';

import { STORAGE_KEYS } from '@/constants/storage.constant.ts';
import { EmailAuthProps } from '@/home/components/SignupContents/EmailAuth/EmailAuth.type';
import { useGetAuthVerificationCheck } from '@/home/hooks/useGetAuthVerificationCheck';
import { usePostAuthVerificationEmail } from '@/home/hooks/usePostAuthVerificationEmail';
import { AuthErrorData } from '@/home/types/Auth.type';
import { useSecondTimer } from '@/hooks/useSecondTimer.ts';

export const useEmailAuth = ({ onConfirm, email }: EmailAuthProps) => {
  const [authed, setAuthed] = useState(true);
  const { leftTime, isTimerEnd, resetTimer } = useSecondTimer(8 * 60);
  const [error, setError] = useState<string>('');
  const [emailSending, setEmailSending] = useState(false);

  const postAuthVerificationEmailMutation = usePostAuthVerificationEmail();
  const getAuthVerificationCheckMutation = useGetAuthVerificationCheck();

  const sendAuthenticationMail = async () => {
    setEmailSending(true);
    await postAuthVerificationEmailMutation.mutateAsync(
      { email: email, verificationType: 'SIGN_UP' },
      {
        onSuccess: () => {
          setAuthed(true);
        },
        onError: () => {
          setAuthed(false);
          setError('인증 메일 재전송에 실패했습니다.');
        },
      }
    );
    setEmailSending(false);
    resetTimer();
  };

  const onClickNext = async () => {
    const session = sessionStorage.getItem(STORAGE_KEYS.EMAIL_AUTH_SESSION_TOKEN);
    if (!session) return;

    await getAuthVerificationCheckMutation.mutateAsync(
      { session: session },
      {
        onSuccess: (data) => {
          if (data.isVerified) onConfirm();
          else setError('이메일 인증을 완료해주세요.');
        },
        onError: (error: AxiosError<AuthErrorData>) => {
          setError(error.response?.data.message || '인증에 실패했습니다.');
        },
      }
    );
  };

  return { authed, leftTime, isTimerEnd, error, emailSending, sendAuthenticationMail, onClickNext };
};
