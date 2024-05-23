import { BoxButton, PasswordTextField } from '@yourssu/design-system-react';

import { useNewPasswordForm } from '@/home/components/ChangePasswordContents/NewPasswordForm/useNewPasswordForm';
import { SessionTokenType } from '@/home/types/GetPassword.type';

import {
  StyledInputContainer,
  StyledBoxContainer,
  StyledTitle,
  StyledInputTitle,
  StyledButtonContainer,
  StyledInputAnimation,
} from './NewPasswordForm.style';

interface NewPasswordFormProps {
  sessionToken: SessionTokenType;
  previousPassword: string;
}

export const NewPasswordForm = (props: NewPasswordFormProps) => {
  const {
    newPassword,
    newPasswordCheck,
    isNewPasswordError,
    isNewPasswordCheckError,
    isFirstRender,
    validationAttempted,
    errorMessage,
    setNewPasswordCheck,
    handleNewPasswordChange,
    handleSubmit,
  } = useNewPasswordForm(props);

  const isNewPasswordFieldNegative = !isFirstRender && isNewPasswordError;
  const isRepeatPasswordFieldNegative = isNewPasswordCheckError && validationAttempted;

  return (
    <StyledBoxContainer>
      <StyledTitle>비밀번호 변경</StyledTitle>
      <StyledInputContainer>
        <StyledInputTitle>새로운 비밀번호를 입력해주세요.</StyledInputTitle>
        <PasswordTextField
          placeholder="숫자와 영문자 조합으로 8자 이상 입력해주세요."
          value={newPassword}
          onChange={(e) => handleNewPasswordChange(e.target.value)}
          isNegative={isNewPasswordFieldNegative}
          helperLabel={isNewPasswordFieldNegative ? errorMessage : ''}
        />
        <StyledInputAnimation
          className={!isNewPasswordError && newPassword.length >= 8 ? 'active' : ''}
        >
          <StyledInputTitle>비밀번호를 한번 더 입력해주세요.</StyledInputTitle>
          <PasswordTextField
            value={newPasswordCheck}
            onChange={(e) => setNewPasswordCheck(e.target.value)}
            isNegative={isRepeatPasswordFieldNegative}
            helperLabel={isRepeatPasswordFieldNegative ? '비밀번호가 일치하지 않습니다.' : ''}
          />
        </StyledInputAnimation>
      </StyledInputContainer>
      <StyledButtonContainer>
        <BoxButton
          rounding={8}
          size="large"
          variant="filled"
          onClick={handleSubmit}
          disabled={isFirstRender || isNewPasswordError}
        >
          변경하기
        </BoxButton>
      </StyledButtonContainer>
    </StyledBoxContainer>
  );
};

export default NewPasswordForm;
