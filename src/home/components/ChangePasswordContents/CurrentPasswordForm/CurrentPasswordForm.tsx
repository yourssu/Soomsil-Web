import { BoxButton } from '@yourssu/design-system-react';

import { useCurrentPasswordForm } from '@/home/components/ChangePasswordContents/CurrentPasswordForm/useCurrentPasswordForm';
import { PasswordInput } from '@/home/components/ChangePasswordContents/PasswordInput/PasswordInput';
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
