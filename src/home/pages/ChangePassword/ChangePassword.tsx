import { useState } from 'react';

import { BoxButton } from '@yourssu/design-system-react';

import Logo from '@/assets/soomsil_v2_logo.svg';

import {
  StyledContainer,
  StyledInputContainer,
  StyledInputRowContainer,
  StyledInput,
  StyledFailedInput,
  StyledErrorMessageContainer,
  StyledLogo,
  StyledBoxContainer,
  StyledTitle,
  StyledInputTitle,
  StyledButtonContainer,
} from './ChangePassword.style';

export const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [matchCurrentPassword, setMatchCurrentPassword] = useState(true);

  const checkCurrentPassword = (currentPassword: string) => {
    // 예시를 위해 '1234'를 올바른 비밀번호로 설정
    setMatchCurrentPassword(currentPassword === '1234');
  };

  return (
    <StyledContainer>
      <StyledLogo src={Logo} alt="soomsil" />
      <StyledBoxContainer>
        <StyledTitle>비밀번호 변경</StyledTitle>
        <StyledInputContainer>
          <StyledInputTitle>현재 비밀번호를 입력 해주세요.</StyledInputTitle>
          <StyledInputRowContainer>
            {matchCurrentPassword ? (
              <StyledInput
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            ) : (
              <StyledFailedInput
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            )}
          </StyledInputRowContainer>
          {!matchCurrentPassword && (
            <StyledErrorMessageContainer>비밀번호가 일치하지 않습니다.</StyledErrorMessageContainer>
          )}
        </StyledInputContainer>
        <StyledButtonContainer>
          <BoxButton
            rounding={8}
            size="large"
            variant="filled"
            onClick={() => checkCurrentPassword(currentPassword)}
          >
            다음
          </BoxButton>
        </StyledButtonContainer>
      </StyledBoxContainer>
    </StyledContainer>
  );
};
