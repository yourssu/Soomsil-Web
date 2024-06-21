import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSecondTimer } from '@/hooks/useSecondTimer';
import { getAuthVerificationCheck, postAuthVerificationEmail } from '@/home/apis/authVerification';
import { useFullEmail } from '@/hooks/useFullEmail';
import { STORAGE_KEYS } from '@/constants/storage.constant';

interface UseEmailVerificationProps {
  email: string;
  onConfirm: () => void;
}

interface FormData {
  email: string;
}

export const useEmailVerification = ({ email, onConfirm }: UseEmailVerificationProps) => {
  const { handleSubmit } = useForm<FormData>({
    defaultValues: { email },
  });

  const { leftTime, resetTimer } = useSecondTimer(480);
  const fullEmail = useFullEmail(email);
  const [error, setError] = useState<string | null>(null);

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
    } else {
      if (!isInitialCheck) {
        setError('이메일 인증을 완료해주세요.');
      }
      if (error) {
        setError('이메일을 다시 확인해주세요.');
      }
    }
  };

  const handleVerification = async () => {
    const session = sessionStorage.getItem(STORAGE_KEYS.EMAIL_AUTH_SESSION_TOKEN);
    const sessionExpiresAt = sessionStorage.getItem(
      STORAGE_KEYS.EMAIL_AUTH_SESSION_TOKEN_EXPIRED_IN
    );

    if (!session || !sessionExpiresAt) {
      setError('세션이 없습니다. 인증 메일을 다시 요청해주세요.');
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
    resetTimer();

    const response = await postAuthVerificationEmail({
      email: fullEmail,
      verificationType: 'PASSWORD',
    });

    if (response.error) {
      setError('이메일을 다시 확인해주세요.');
    }
  };

  return {
    handleSubmit,
    leftTime,
    handleTimer,
    handleVerification,
    handleResendEmail,
    error,
  };
};
