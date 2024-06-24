import { BoxButton, PasswordTextField } from '@yourssu/design-system-react';

import {
  StyledPasswordContainer,
  StyledSubTitleText,
  StyledTitleText,
} from './ResetPasswordInput.style';
import { useResetPasswordInput } from './useResetPasswordInput';

interface ResetPasswordProps {
  email: string;
  onConfirm: () => void;
}

export const ResetPasswordInput = ({ email, onConfirm }: ResetPasswordProps) => {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    password,
    confirmPassword,
    handleOnSubmit,
  } = useResetPasswordInput({ email, onConfirm });

  return (
    <>
      <StyledTitleText>비밀번호 재설정</StyledTitleText>
      <StyledSubTitleText>새로운 비밀번호를 입력해주세요.</StyledSubTitleText>
      <StyledPasswordContainer>
        <PasswordTextField
          {...register('password')}
          isNegative={errors.password ? true : false}
          helperLabel={
            errors.password
              ? errors.password.message
              : '숫자, 영문자, 특수문자 조합으로 8자 이상 입력해주세요'
          }
        />
      </StyledPasswordContainer>
      <StyledSubTitleText>비밀번호를 한번 더 입력해주세요.</StyledSubTitleText>
      <StyledPasswordContainer>
        <PasswordTextField
          {...register('confirmPassword')}
          isNegative={errors.confirmPassword ? true : false}
          helperLabel={errors.confirmPassword ? '비밀번호가 일치하지 않습니다.' : ''}
        />
      </StyledPasswordContainer>
      <BoxButton
        type="submit"
        style={{ width: '100%' }}
        size="large"
        variant="filled"
        rounding={8}
        onClick={handleSubmit(handleOnSubmit)}
        disabled={isSubmitting || password === '' || confirmPassword === ''}
      >
        비밀번호 재설정 완료
      </BoxButton>
    </>
  );
};
