import { hasNumberAndEnglishWithSymbols } from '@yourssu/utils';
import { useForm } from 'react-hook-form';

import { STORAGE_KEYS } from '@/constants/storage.constant';
import { usePostChangePassword } from '@/home/hooks/usePostChangePassword';
import { useParseFullEmail } from '@/hooks/useParseFullEmail';

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
  const postChangePassword = usePostChangePassword({ onSuccessFunction: onConfirm, setError });
  const parseFullEmail = useParseFullEmail();
  const fullEmail = parseFullEmail(email);
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

    postChangePassword.mutate({
      email: fullEmail,
      sessionToken: sessionToken,
      newPassword: data.password,
    });
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
