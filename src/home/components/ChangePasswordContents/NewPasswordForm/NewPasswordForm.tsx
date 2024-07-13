import { BoxButton, PasswordTextField } from '@yourssu/design-system-react';

import { useNewPasswordForm } from '@/home/components/ChangePasswordContents/NewPasswordForm/useNewPasswordForm';
import { NewPasswordFormProps } from '@/home/types/password.type';

import {
  StyledInputContainer,
  StyledBoxContainer,
  StyledTitle,
  StyledInputTitle,
  StyledButtonContainer,
  StyledInputAnimation,
} from './NewPasswordForm.style';

export const NewPasswordForm = (props: NewPasswordFormProps) => {
  const { isFirstRender, register, passwordValidate, errors, onSubmit, handleSubmit } =
    useNewPasswordForm(props);

  const isInvalidPassword = !isFirstRender && !!errors.newPassword;
  const isValidPassword = !isFirstRender && !errors.newPassword;

  return (
    <StyledBoxContainer onSubmit={handleSubmit(onSubmit)}>
      <StyledTitle>비밀번호 변경</StyledTitle>
      <StyledInputContainer>
        <StyledInputTitle>새로운 비밀번호를 입력해주세요.</StyledInputTitle>
        <PasswordTextField
          placeholder="숫자, 영문자, 특수문자 조합으로 8자 이상 입력해주세요"
          {...register('newPassword', {
            validate: passwordValidate,
          })}
          isNegative={isInvalidPassword}
          helperLabel={isInvalidPassword ? (errors.newPassword?.message as string) : ''}
        />
        <StyledInputAnimation className={isValidPassword ? 'active' : ''}>
          <StyledInputTitle>비밀번호를 한번 더 입력해주세요.</StyledInputTitle>
          <PasswordTextField
            {...register('newPasswordCheck')}
            isNegative={!!errors.newPasswordCheck}
            helperLabel={errors.newPasswordCheck?.message as string | undefined}
          />
        </StyledInputAnimation>
      </StyledInputContainer>
      <StyledButtonContainer>
        <BoxButton
          rounding={8}
          size="large"
          variant="filled"
          onClick={onSubmit}
          disabled={!isValidPassword}
        >
          변경하기
        </BoxButton>
      </StyledButtonContainer>
    </StyledBoxContainer>
  );
};

export default NewPasswordForm;
