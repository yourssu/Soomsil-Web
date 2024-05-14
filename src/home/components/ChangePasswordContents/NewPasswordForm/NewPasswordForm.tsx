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
}

export const NewPasswordForm = ({ sessionToken }: NewPasswordFormProps) => {
  const {
    newPassword,
    newPasswordCheck,
    isNewPasswordError,
    isNewPasswordCheckError,
    isFirstRender,
    validationAttempted,
    setNewPasswordCheck,
    handleNewPasswordChange,
    handleSubmit,
  } = useNewPasswordForm(sessionToken);

  return (
    <StyledBoxContainer>
      <StyledTitle>비밀번호 변경</StyledTitle>
      <StyledInputContainer>
        <StyledInputTitle>새로운 비밀번호를 입력해주세요.</StyledInputTitle>
        <PasswordTextField
          placeholder="숫자와 영문자 조합으로 8자 이상 입력해주세요."
          value={newPassword}
          onChange={(e) => handleNewPasswordChange(e.target.value)}
          isNegative={!isFirstRender && isNewPasswordError}
          helperLabel={
            !isFirstRender && isNewPasswordError
              ? '숫자와 영문자 조합으로 8자 이상 입력해주세요.'
              : ''
          }
          isMarked={true}
        />
        <StyledInputAnimation
          className={!isNewPasswordError && newPassword.length >= 8 ? 'active' : ''}
        >
          <StyledInputTitle>비밀번호를 한번 더 입력해주세요.</StyledInputTitle>
          <PasswordTextField
            value={newPasswordCheck}
            onChange={(e) => setNewPasswordCheck(e.target.value)}
            isNegative={isNewPasswordCheckError && validationAttempted}
            helperLabel={
              isNewPasswordCheckError && validationAttempted ? '비밀번호가 일치하지 않습니다.' : ''
            }
            isMarked={true}
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
