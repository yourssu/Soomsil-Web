import { BoxButton } from '@yourssu/design-system-react';
import {
  StyledButtonText,
  StyledSubTitleText,
  StyledTimer,
  StyledTitleText,
} from './EmailVerification.style';
import { useSecondTimer } from '@/hooks/useSecondTimer';
import { useState } from 'react';

interface EmailVerificationProps {
  onConfirm: () => void;
}
export const EmailVerification = ({ onConfirm }: EmailVerificationProps) => {
  const [emailVerified, setEmailVerified] = useState(true);
  const { leftTime, resetTimer } = useSecondTimer(480);

  const handleTimer = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <StyledTitleText>비밀번호 찾기</StyledTitleText>
      <StyledSubTitleText>
        인증 메일을 확인한 후 <br />
        새로운 비밀번호를 재설정해주세요.
      </StyledSubTitleText>
      <StyledTimer>{handleTimer(leftTime)}</StyledTimer>
      <StyledButtonText onClick={resetTimer}>인증 메일 재전송</StyledButtonText>
      <BoxButton
        style={{ width: '100%' }}
        size="large"
        variant="filled"
        rounding={8}
        disabled={!emailVerified}
        onClick={onConfirm}
      >
        비밀번호 재설정하기
      </BoxButton>
    </>
  );
};
