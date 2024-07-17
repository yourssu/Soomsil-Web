import { BoxButton, PasswordTextField } from '@yourssu/design-system-react';
import { hasNumberAndEnglishWithSymbols } from '@yourssu/utils';
import { AxiosError } from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';

import { STORAGE_KEYS } from '@/constants/storage.constant';
import { usePostChangePassword } from '@/home/hooks/usePostChangePassword';
import { AuthErrorData } from '@/home/types/Auth.type';
import { FormData } from '@/home/types/password.type';
import { useParseFullEmail } from '@/hooks/useParseFullEmail';

import {
  StyledBoxContainer,
  StyledButtonContainer,
  StyledInputContainer,
  StyledInputTitle,
  StyledTitle,
} from './ResetPasswordInput.style';

interface ResetPasswordProps {
  email: string;
  onConfirm: () => void;
}

export const ResetPasswordInput = ({ email, onConfirm }: ResetPasswordProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm<FormData>();
  const parseFullEmail = useParseFullEmail();
  const fullEmail = parseFullEmail(email);
  const changePasswordMutation = usePostChangePassword();

  const onSubmit: SubmitHandler<FormData> = ({ password }) => {
    changePasswordMutation.mutate(
      {
        email: fullEmail,
        sessionToken: sessionStorage.getItem(STORAGE_KEYS.EMAIL_AUTH_SESSION_TOKEN),
        newPassword: password,
      },
      {
        onSuccess: () => {
          onConfirm();
        },
        onError: (error) => {
          const serverError = (error as AxiosError).response?.data as AuthErrorData;
          const errorMessage =
            serverError?.error === 'Auth-007'
              ? '현재 비밀번호와 다른 비밀번호를 입력해주세요.'
              : serverError?.message || '비밀번호 변경 중 오류가 발생했습니다.';
          setError('password', { type: 'manual', message: errorMessage });
        },
      }
    );
  };

  return (
    <>
      <StyledBoxContainer onSubmit={handleSubmit(onSubmit)}>
        <StyledTitle>비밀번호 재설정</StyledTitle>
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
    </>
  );
};
