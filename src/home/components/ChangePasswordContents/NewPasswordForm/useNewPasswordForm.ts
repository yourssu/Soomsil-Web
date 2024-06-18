import { useState, useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { usePostChangePassword } from '@/home/hooks/usePostChangePassword';
import { LogInState } from '@/home/recoil/LogInState';
import { UserState } from '@/home/recoil/UserState';
import { NewPasswordFormProps } from '@/home/types/password.type';

export const useNewPasswordForm = (props: NewPasswordFormProps) => {
  const { sessionToken, previousPassword } = props;
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  const {
    register,
    watch,
    formState: { errors },
    getValues,
    setValue,
    setError,
  } = useForm({
    mode: 'onChange',
  });

  const isLoggedIn = useRecoilValue(LogInState);
  const currentUser = useRecoilValue(UserState);
  const navigate = useNavigate();
  const postChangePassword = usePostChangePassword();

  const newPassword = watch('newPassword');

  useEffect(() => {
    setIsFirstRender(!newPassword || newPassword.length < 8);
  }, [newPassword]);

  const passwordValidate = (newPassword: string) => {
    if (newPassword === previousPassword) {
      setValue('newPasswordCheck', '');
      return '현재 비밀번호와 다른 비밀번호를 입력해주세요.';
    }

    const regexp = /^(?=.*[a-zA-Z])(?=.*[0-9]).*$/;

    if (!regexp.test(newPassword)) {
      setValue('newPasswordCheck', '');
      return '숫자와 영문자 조합으로 8자 이상 입력해주세요.';
    }

    return true;
  };

  const onSubmit = async () => {
    const newPasswordCheck = getValues('newPasswordCheck');

    if (newPassword !== newPasswordCheck) {
      setError('newPasswordCheck', {
        type: 'manual',
        message: '비밀번호가 일치하지 않습니다.',
      });
      return;
    }

    if (!isLoggedIn || !currentUser) {
      navigate('/Login');
      return;
    }

    postChangePassword.mutate({
      email: currentUser.email,
      newPassword,
      sessionToken,
    });
  };

  return {
    newPassword,
    isFirstRender,
    register,
    onSubmit,
    passwordValidate,
    errors,
  };
};
