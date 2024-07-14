import { useState, useEffect } from 'react';

import { hasNumberAndEnglishWithSymbols } from '@yourssu/utils';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { useGetUserData } from '@/home/hooks/useGetUserData';
import { usePostChangePassword } from '@/home/hooks/usePostChangePassword';
import { LogInState } from '@/home/recoil/LogInState';
import { NewPasswordFormProps, FormData } from '@/home/types/password.type';

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
    handleSubmit,
  } = useForm<FormData>({
    mode: 'onChange',
  });

  const isLoggedIn = useRecoilValue(LogInState);
  const { data: currentUser } = useGetUserData();
  const navigate = useNavigate();
  const postChangePassword = usePostChangePassword({
    onSuccessFunction: () => {
      navigate('/MyPage');
    },
    setError,
  });

  const newPassword = watch('password');

  useEffect(() => {
    setIsFirstRender(!newPassword || newPassword.length < 8);
  }, [newPassword]);

  const passwordValidate = (newPassword: string) => {
    if (newPassword === previousPassword) {
      setValue('confirmPassword', '');
      return '현재 비밀번호와 다른 비밀번호를 입력해주세요.';
    }

    if (hasNumberAndEnglishWithSymbols(newPassword) && newPassword.length <= 100) return true;

    setValue('confirmPassword', '');
    return '숫자, 영문자, 특수문자 조합으로 8자 이상 입력해주세요.';
  };

  const onSubmit = () => {
    const confirmPassword = getValues('confirmPassword');

    if (newPassword !== confirmPassword) {
      setError('confirmPassword', {
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
    handleSubmit,
  };
};
