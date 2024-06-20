import { EMAIL_DOMAIN } from '@/constants/email.constant';
import { BoxButton, SuffixTextField } from '@yourssu/design-system-react';
import { StyledEmailContainer, StyledSubTitleText, StyledTitleText } from './EmailInput.style';
import { useState } from 'react';
interface EmailInputProps {
  onConfirm: () => void;
}
export const EmailInput = ({ onConfirm }: EmailInputProps) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailSending, setEmailSending] = useState(false);

  const handleChange = (value: string) => {
    setEmail(value);
    if (emailError) {
      setEmailError(false);
    }
  };

  const handleEmailSubmit = () => {
    if (!email) {
      setEmailError(true);
      return;
    }
    setEmailSending(true);
    onConfirm();
  };
  return (
    <>
      <StyledTitleText>비밀번호 찾기</StyledTitleText>
      <StyledSubTitleText>
        숨쉴에 가입했던 학교 이메일을 입력해주세요.
        <br />
        비밀번호 재설정 메일을 보내드립니다.
      </StyledSubTitleText>
      <StyledEmailContainer>
        <SuffixTextField
          fieldLabel="학교 이메일"
          placeholder="ppushoong"
          suffix={EMAIL_DOMAIN}
          value={email}
          onChange={(e) => handleChange(e.target.value)}
          isNegative={emailError}
          helperLabel={emailError ? '존재하지 않는 이메일입니다.' : ''}
        />
      </StyledEmailContainer>
      <BoxButton
        style={{ width: '100%' }}
        size="large"
        variant="filled"
        rounding={8}
        onClick={handleEmailSubmit}
        disabled={emailSending}
      >
        재설정 메일 보내기
      </BoxButton>
    </>
  );
};
