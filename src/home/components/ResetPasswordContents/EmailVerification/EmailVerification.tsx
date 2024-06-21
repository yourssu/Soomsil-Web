import { BoxButton, PlainButton } from '@yourssu/design-system-react';
import { StyledSubTitleText, StyledTimer, StyledTitleText } from './EmailVerification.style';
import { useSecondTimer } from '@/hooks/useSecondTimer';
import { getAuthVerificationCheck, postAuthVerificationEmail } from '@/home/apis/authVerification';
import { useFullEmail } from '@/hooks/useFullEmail';
import { useEffect } from 'react';
import { STORAGE_KEYS } from '@/constants/storage.constant';
import { useForm } from 'react-hook-form';

interface EmailVerificationProps {
  email: string;
  onConfirm: () => void;
}

interface FormData {
  email: string;
}

export const EmailVerification = ({ email, onConfirm }: EmailVerificationProps) => {
  const {
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<FormData>({
    defaultValues: { email },
  });

  const { leftTime, resetTimer } = useSecondTimer(480);
  const fullEmail = useFullEmail(email);

  useEffect(() => {
    const session = sessionStorage.getItem(STORAGE_KEYS.EMAIL_AUTH_SESSION_TOKEN);
    if (session) {
      verifyEmailSession(session, true);
    }
  }, []);

  const verifyEmailSession = async (session: string, isInitialCheck: boolean = false) => {
    const { data, error } = await getAuthVerificationCheck({ session });
    if (data?.isVerified) {
      onConfirm();
    } else {
      if (!isInitialCheck) {
        setError('email', { type: 'manual', message: '이메일 인증을 완료해주세요.' });
      }
      if (error) {
        setError('email', { type: 'manual', message: '이메일을 다시 확인해주세요.' });
      }
    }
  };

  const handleVerification = async () => {
    const session = sessionStorage.getItem(STORAGE_KEYS.EMAIL_AUTH_SESSION_TOKEN);
    const sessionExpiresAt = sessionStorage.getItem(
      STORAGE_KEYS.EMAIL_AUTH_SESSION_TOKEN_EXPIRED_IN
    );

    if (!session || !sessionExpiresAt) {
      setError('email', {
        type: 'manual',
        message: '세션이 없습니다. 인증 메일을 다시 요청해주세요.',
      });
      return;
    }
    await verifyEmailSession(session);
    clearErrors('email');
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
      setError('email', { type: 'manual', message: '이메일을 다시 확인해주세요.' });
    }
  };

  return (
    <>
      <StyledTitleText>비밀번호 찾기</StyledTitleText>
      <StyledSubTitleText>
        인증 메일을 확인한 후 <br />
        새로운 비밀번호를 재설정해주세요.
      </StyledSubTitleText>
      <StyledTimer>{handleTimer(leftTime)}</StyledTimer>
      <PlainButton size="medium" isPointed={false} isWarned={false} onClick={handleResendEmail}>
        인증 메일 재전송
      </PlainButton>
      {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      <BoxButton
        style={{ width: '100%' }}
        size="large"
        variant="filled"
        rounding={8}
        onClick={handleSubmit(handleVerification)}
      >
        비밀번호 재설정하기
      </BoxButton>
    </>
  );
};
