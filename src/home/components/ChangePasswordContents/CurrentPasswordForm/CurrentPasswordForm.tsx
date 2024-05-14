import { BoxButton, PasswordTextField } from '@yourssu/design-system-react';

import { useCurrentPasswordForm } from '@/home/components/ChangePasswordContents/CurrentPasswordForm/useCurrentPasswordForm';
import { SessionTokenType } from '@/home/types/GetPassword.type';

import {
  StyledInputContainer,
  StyledBoxContainer,
  StyledTitle,
  StyledInputTitle,
  StyledButtonContainer,
} from './CurrentPasswordForm.style';

interface CurrentPasswordFormProps {
  onConfirm: () => void;
  setSessionToken: ({ sessionToken }: SessionTokenType) => void;
}

export const CurrentPasswordForm = (Props: CurrentPasswordFormProps) => {
  const { currentPassword, isError, handlePasswordChange, checkCurrentPassword } =
    useCurrentPasswordForm(Props);

  return (
    <StyledBoxContainer>
      <StyledTitle>비밀번호 변경</StyledTitle>
      <StyledInputContainer>
        <StyledInputTitle>현재 비밀번호를 입력 해주세요.</StyledInputTitle>
        <PasswordTextField
          placeholder="비밀번호를 입력해주세요."
          value={currentPassword}
          onChange={(e) => handlePasswordChange(e.target.value)}
          isNegative={isError}
          helperLabel={isError ? '비밀번호가 일치하지 않습니다.' : ''}
          isMarked={true}
        />
      </StyledInputContainer>
      <StyledButtonContainer>
        <BoxButton
          rounding={8}
          size="large"
          variant="filled"
          onClick={checkCurrentPassword}
          disabled={currentPassword.length === 0}
        >
          다음
        </BoxButton>
      </StyledButtonContainer>
    </StyledBoxContainer>
  );
};
