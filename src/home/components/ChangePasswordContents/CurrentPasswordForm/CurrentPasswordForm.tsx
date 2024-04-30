import { useState } from 'react';

import { BoxButton } from '@yourssu/design-system-react';
import { useNavigate } from 'react-router-dom';

import { getPassword } from '@/home/apis/getPassword';
import { PasswordInput } from '@/home/components/ChangePasswordContents/PasswordInput/PasswordInput';
import { sessionTokenType } from '@/home/types/GetPassword.type';
import { api } from '@/service/TokenService';

import {
  StyledInputContainer,
  StyledBoxContainer,
  StyledTitle,
  StyledInputTitle,
  StyledButtonContainer,
} from './CurrentPasswordForm.style';

interface CurrentPasswordFormProps {
  onConfirm: () => void;
  setSessionToken: ({ sessionToken }: sessionTokenType) => void;
}

export const CurrentPasswordForm = (Props: CurrentPasswordFormProps) => {
  const { onConfirm, setSessionToken } = Props;
  const [currentPassword, setCurrentPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const checkCurrentPassword = (currentPassword: string) => {
    const accessToken = api.getAccessToken();
    if (!accessToken) {
      alert('로그인이 필요합니다.');
      navigate('/');
    }

    getPassword({ password: currentPassword, accessToken }).then((res) => {
      if (!res) navigate('/Login');
      if (res?.match) {
        setIsError(false);
        setSessionToken(res.sessionToken as sessionTokenType);
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
          disabled={currentPassword.length === 0}
        >
          다음
        </BoxButton>
      </StyledButtonContainer>
    </StyledBoxContainer>
  );
};
