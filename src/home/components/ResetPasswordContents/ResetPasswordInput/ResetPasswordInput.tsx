import { BoxButton, PasswordTextField } from '@yourssu/design-system-react';
import {
  StyledPasswordContainer,
  StyledSubTitleText,
  StyledTitleText,
} from './ResetPasswordInput.style';
import { STORAGE_KEYS } from '@/constants/storage.constant';
import { postChangePassword } from '@/home/apis/postChangePassword';
import { useFullEmail } from '@/hooks/useFullEmail';
import { useForm } from 'react-hook-form';
import { AxiosError } from 'axios';
import { AuthErrorData } from '@/home/types/Auth.type';

interface ResetPasswordProps {
  email: string;
  onConfirm: () => void;
}

interface FormData {
  password: string;
  confirmPassword: string;
}

export const ResetPasswordInput = ({ email, onConfirm }: ResetPasswordProps) => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const fullEmail = useFullEmail(email);

  const handleOnSubmit = async (data: FormData) => {
    if (data.password !== data.confirmPassword) {
      setError('confirmPassword', { type: 'manual', message: '비밀번호가 일치하지 않습니다.' });
      return;
    }

    const sessionToken = sessionStorage.getItem(STORAGE_KEYS.EMAIL_AUTH_SESSION_TOKEN);
    const sessionTokenExpiresAt = sessionStorage.getItem(
      STORAGE_KEYS.EMAIL_AUTH_SESSION_TOKEN_EXPIRED_IN
    );

    if (!sessionToken || !sessionTokenExpiresAt) {
      setError('confirmPassword', {
        type: 'manual',
        message: '세션이 없습니다. 인증 메일을 다시 요청해주세요.',
      });
      return;
    }

    try {
      await postChangePassword({
        email: fullEmail,
        sessionToken: { sessionToken, sessionTokenExpiresAt },
        newPassword: data.password,
      });
      onConfirm();
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const serverError = error.response?.data as AuthErrorData;
        console.log(serverError);
        const errorMessage =
          serverError?.error === 'Auth-007'
            ? '비밀번호를 변경할 수 없습니다. 이전 비밀번호와 다르게 설정해주세요.'
            : serverError?.message || '비밀번호 변경 중 오류가 발생했습니다.';
        setError('confirmPassword', { type: 'manual', message: errorMessage });
      } else {
        setError('confirmPassword', {
          type: 'manual',
          message: '비밀번호 변경 중 오류가 발생했습니다.',
        });
      }
    }
  };

  const password = watch('password', '');
  const confirmPassword = watch('confirmPassword', '');

  return (
    <>
      <StyledTitleText>비밀번호 재설정</StyledTitleText>
      <StyledSubTitleText>새로운 비밀번호를 입력해주세요.</StyledSubTitleText>
      <StyledPasswordContainer>
        <PasswordTextField
          {...register('password')}
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
          helperLabel={errors.confirmPassword ? errors.confirmPassword.message : ''}
        />
      </StyledPasswordContainer>
      <BoxButton
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
