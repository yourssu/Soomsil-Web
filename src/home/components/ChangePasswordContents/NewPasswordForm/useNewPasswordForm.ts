import { useState, useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { postChangePassword } from '@/home/apis/postChangePassword';
import { LogInState } from '@/home/recoil/LogInState';
import { UserState } from '@/home/recoil/UserState';
import { NewPasswordFormProps } from '@/home/types/password.type';
import { api } from '@/service/TokenService';

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

  const changePasswordApi = async (email: string) => {
    const { data, error } = await postChangePassword({
      email: email,
      newPassword: newPassword,
      sessionToken: sessionToken,
    });

    if (error) {
      navigate('/Login');
      return;
    }

    if (data) {
      api.setAccessToken(data.accessToken, data.accessTokenExpiredIn);
      api.setRefreshToken(data.refreshToken, data.refreshTokenExpiredIn);
      navigate('/myPage');
    }
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

    await changePasswordApi(currentUser.email);
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
