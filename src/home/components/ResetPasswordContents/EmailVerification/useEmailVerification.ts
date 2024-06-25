import { useState, useEffect } from 'react';

import { STORAGE_KEYS } from '@/constants/storage.constant';
import { getAuthVerificationCheck, postAuthVerificationEmail } from '@/home/apis/authVerification';
import { useParseFullEmail } from '@/hooks/useParseFullEmail';
import { useSecondTimer } from '@/hooks/useSecondTimer';

interface UseEmailVerificationProps {
  email: string;
  onConfirm: () => void;
}

export const useEmailVerification = ({ email, onConfirm }: UseEmailVerificationProps) => {
  const { leftTime, resetTimer } = useSecondTimer(480);
  const parseFullEmail = useParseFullEmail();
  const fullEmail = parseFullEmail(email);

  const [error, setError] = useState<string | null>(null);
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    const session = sessionStorage.getItem(STORAGE_KEYS.EMAIL_AUTH_SESSION_TOKEN);
    if (session) {
      verifyEmailSession(session, true);
    }
  }, []);

  const verifyEmailSession = async (session: string, isInitialCheck: boolean = false) => {
    const { data, error } = await getAuthVerificationCheck({ session });
    if (data?.isVerified) {
      setError(null);
      onConfirm();
    } else if (!isInitialCheck || error) {
      setError('이메일 인증을 완료해주세요.');
    }
  };

  const handleVerification = async () => {
    const session = sessionStorage.getItem(STORAGE_KEYS.EMAIL_AUTH_SESSION_TOKEN);
    const sessionExpiresAt = sessionStorage.getItem(
      STORAGE_KEYS.EMAIL_AUTH_SESSION_TOKEN_EXPIRED_IN
    );

    if (!session || !sessionExpiresAt) {
      setError('이메일 인증을 완료해주세요.');
      return;
    }
    await verifyEmailSession(session);
  };

  const handleTimer = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleResendEmail = async () => {
    setIsResending(true);
    resetTimer();

    const response = await postAuthVerificationEmail({
      email: fullEmail,
      verificationType: 'PASSWORD',
    });

    if (response.error) {
      setError('이메일 인증을 완료해주세요.');
    }
    setIsResending(false);
  };

  return {
    leftTime,
    handleTimer,
    handleVerification,
    handleResendEmail,
    error,
    isResending,
  };
};
