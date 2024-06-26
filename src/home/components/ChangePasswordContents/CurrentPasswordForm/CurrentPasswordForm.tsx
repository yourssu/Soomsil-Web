import { useEffect } from 'react';

import { useMutation } from '@tanstack/react-query';
import { BoxButton, PasswordTextField } from '@yourssu/design-system-react';
import { useForm } from 'react-hook-form';

import { getUserPasswordMatch } from '@/home/apis/getUserPasswordMatch';
import { SessionTokenType } from '@/home/types/password.type';

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
  setPreviousPassword: (password: string) => void;
}

export const CurrentPasswordForm = (props: CurrentPasswordFormProps) => {
  const { onConfirm, setSessionToken, setPreviousPassword } = props;
  const { formState, register, watch, setError, clearErrors, handleSubmit } = useForm();

  const currentPassword = watch('currentPassword');

  useEffect(() => {
    clearErrors();
  }, [currentPassword, clearErrors]);

  const passwordMatchMutation = useMutation({
    mutationFn: getUserPasswordMatch,
    onSuccess: (data) => {
      setSessionToken(data);
      setPreviousPassword(currentPassword);
      onConfirm();
    },
    onError: () => {
      setError('currentPassword', { message: '비밀번호가 일치하지 않습니다.' });
    },
  });

  const handleOnSubmit = () => {
    passwordMatchMutation.mutate(currentPassword);
  };

  return (
    <StyledBoxContainer onSubmit={handleSubmit(handleOnSubmit)}>
      <StyledTitle>비밀번호 변경</StyledTitle>
      <StyledInputContainer>
        <StyledInputTitle>현재 비밀번호를 입력 해주세요.</StyledInputTitle>
        <PasswordTextField
          placeholder="비밀번호를 입력해주세요."
          {...register('currentPassword')}
          isNegative={!!formState.errors.currentPassword}
          helperLabel={formState.errors.currentPassword?.message as string | undefined}
        />
      </StyledInputContainer>
      <StyledButtonContainer>
        <BoxButton
          type="submit"
          rounding={8}
          size="large"
          variant="filled"
          disabled={!currentPassword || formState.isSubmitting}
        >
          다음
        </BoxButton>
      </StyledButtonContainer>
    </StyledBoxContainer>
  );
};
