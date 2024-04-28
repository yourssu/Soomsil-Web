import { useState } from 'react';

import { BoxButton } from '@yourssu/design-system-react';
import { useNavigate } from 'react-router-dom';

import Logo from '@/assets/soomsil_v2_logo.svg';
import { getPassword } from '@/home/apis/getPassword';
import { PasswordInput } from '@/home/components/ChangePasswordContents/PasswordInput/PasswordInput';
import { api } from '@/service/TokenService';

import {
  StyledContainer,
  StyledInputContainer,
  StyledLogo,
  StyledBoxContainer,
  StyledTitle,
  StyledInputTitle,
  StyledButtonContainer,
} from './CurrentPasswordForm.style';

interface CurrentPasswordFormProps {
  onConfirm: () => void;
}

export const CurrentPasswordForm = ({ onConfirm }: CurrentPasswordFormProps) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const checkCurrentPassword = (currentPassword: string) => {
    const accessToken = api.getAccessToken();
    if (!accessToken) navigate('/');

    getPassword({ password: currentPassword, accessToken }).then((res) => {
      if (!res) navigate('/');
      if (res?.match) {
        setIsError(false);
        onConfirm();
      } else {
        setIsError(true);
      }
    });
  };

  const handlePasswordChange = (password: string) => {
    if (isError) setIsError(false);

    setCurrentPassword(password);
  };

  return (
    <StyledContainer>
      <StyledLogo src={Logo} alt="soomsil" />
      <StyledBoxContainer>
        <StyledTitle>비밀번호 변경</StyledTitle>
        <StyledInputContainer>
          <StyledInputTitle>현재 비밀번호를 입력 해주세요.</StyledInputTitle>
          <PasswordInput
            placeholder="비밀번호를 입력해주세요."
            value={currentPassword}
            onChangeHandler={handlePasswordChange}
            isError={isError}
            errorMessage="비밀번호가 일치하지 않습니다."
          />
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
