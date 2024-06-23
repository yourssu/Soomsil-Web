import { useForm } from 'react-hook-form';
import { STORAGE_KEYS } from '@/constants/storage.constant';
import { postChangePassword } from '@/home/apis/postChangePassword';
import { useFullEmail } from '@/hooks/useFullEmail';
import { AxiosError } from 'axios';
import { AuthErrorData } from '@/home/types/Auth.type';
import { hasNumberAndEnglishWithSymbols } from '@yourssu/utils';

interface UseResetPasswordInputProps {
  email: string;
  onConfirm: () => void;
}

interface FormData {
  password: string;
  confirmPassword: string;
}

export const useResetPasswordInput = ({ email, onConfirm }: UseResetPasswordInputProps) => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const fullEmail = useFullEmail(email);
  const password = watch('password', '');
  const confirmPassword = watch('confirmPassword', '');

  const passwordValidate = (password: string) => {
    if (hasNumberAndEnglishWithSymbols(password) && password.length >= 8 && password.length <= 100)
      return true;
    return '숫자, 영문자, 특수문자 조합으로 8자 이상 입력해주세요.';
  };

  const handleOnSubmit = async (data: FormData) => {
    if (data.password !== data.confirmPassword) {
      setError('confirmPassword', { type: 'manual', message: '비밀번호가 일치하지 않습니다.' });
      return;
    }

    const passwordError = passwordValidate(data.password);
    if (passwordError !== true) {
      setError('password', { type: 'manual', message: passwordError });
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
        const errorMessage =
          serverError?.error === 'Auth-007'
            ? '현재 비밀번호와 다른 비밀번호를 입력해주세요.'
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

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    password,
    confirmPassword,
    handleOnSubmit,
  };
};
