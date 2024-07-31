import { BoxButton, PasswordTextField } from '@yourssu/design-system-react';
import { hasNumberAndEnglishWithSymbols } from '@yourssu/utils';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useGetUserData } from '@/home/hooks/useGetUserData';
import { usePostChangePassword } from '@/home/hooks/usePostChangePassword';
import { FormData, NewPasswordFormProps } from '@/home/types/password.type';

import {
  StyledBoxContainer,
  StyledButtonContainer,
  StyledInputContainer,
  StyledInputTitle,
  StyledTitle,
} from './NewPasswordForm.style';

export const NewPasswordForm = ({ sessionToken, previousPassword }: NewPasswordFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm<FormData>();
  const { data: currentUser } = useGetUserData();
  const changePasswordMutation = usePostChangePassword();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = ({ password }) => {
    changePasswordMutation.mutate(
      {
        email: currentUser!.email,
        sessionToken: sessionToken.sessionToken,
        newPassword: password,
      },
      {
        onSuccess: () => navigate('/mypage'),
        onError: (error) => {
          setError('password', { message: error.message });
        },
      }
    );
  };

  return (
    <StyledBoxContainer onSubmit={handleSubmit(onSubmit)}>
      <StyledTitle>비밀번호 변경</StyledTitle>
      <StyledInputContainer>
        <StyledInputTitle>새로운 비밀번호를 입력해주세요.</StyledInputTitle>
        <PasswordTextField
          placeholder="숫자, 영문자, 특수문자 조합으로 8자 이상 입력해주세요"
          {...register('password', {
            minLength: {
              value: 8,
              message: '8자 이상 입력해주세요.',
            },
            validate: {
              previousPassword: (password) =>
                password !== previousPassword || '현재 비밀번호와 다른 비밀번호를 입력해주세요.',
              hasNumberAndEnglishWithSymbols: (password) =>
                hasNumberAndEnglishWithSymbols(password) ||
                '숫자, 영문자, 특수문자 조합으로 입력해주세요.',
            },
          })}
          isNegative={!!errors.password}
          helperLabel={errors.password?.message}
        />

        <StyledInputTitle>비밀번호를 한번 더 입력해주세요.</StyledInputTitle>
        <PasswordTextField
          {...register('confirmPassword', {
            validate: (confirmPassword) =>
              confirmPassword === getValues('password') || '비밀번호가 일치하지 않습니다.',
          })}
          isNegative={!!errors.confirmPassword}
          helperLabel={errors.confirmPassword?.message}
        />
      </StyledInputContainer>
      <StyledButtonContainer>
        <BoxButton
          type="submit"
          rounding={8}
          size="large"
          variant="filled"
          disabled={changePasswordMutation.isPending}
        >
          변경하기
        </BoxButton>
      </StyledButtonContainer>
    </StyledBoxContainer>
  );
};

export default NewPasswordForm;
