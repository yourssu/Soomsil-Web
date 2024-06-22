import { BoxButton, PlainButton } from '@yourssu/design-system-react';
import { StyledSubTitleText, StyledTimer, StyledTitleText } from './EmailVerification.style';
import { useEmailVerification } from './useEmailVerification';

interface EmailVerificationProps {
  email: string;
  onConfirm: () => void;
}

export const EmailVerification = ({ email, onConfirm }: EmailVerificationProps) => {
  const { leftTime, handleTimer, handleVerification, handleResendEmail, error, isResending } =
    useEmailVerification({ email, onConfirm });

  return (
    <>
      <StyledTitleText>비밀번호 찾기</StyledTitleText>
      <StyledSubTitleText>
        인증 메일을 확인한 후 <br />
        새로운 비밀번호를 재설정해주세요.
      </StyledSubTitleText>
      <StyledTimer>{handleTimer(leftTime)}</StyledTimer>
      <PlainButton
        size="medium"
        isPointed={false}
        isWarned={false}
        onClick={handleResendEmail}
        disabled={isResending}
      >
        인증 메일 재전송
      </PlainButton>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <BoxButton
        style={{ width: '100%' }}
        size="large"
        variant="filled"
        rounding={8}
        onClick={handleVerification}
        disabled={isResending}
      >
        비밀번호 재설정하기
      </BoxButton>
    </>
  );
};
