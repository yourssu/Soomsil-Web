import { useState, useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { postChangePassword } from '@/home/apis/postChangePassword';
import { LogInState } from '@/home/recoil/LogInState';
import { UserState } from '@/home/recoil/UserState';
import { SessionTokenType } from '@/home/types/GetPassword.type';
import { api } from '@/service/TokenService';

interface NewPasswordFormProps {
  sessionToken: SessionTokenType;
  previousPassword: string;
}

export const useNewPasswordForm = (props: NewPasswordFormProps) => {
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const newPassword = watch('newPassword');

  useEffect(() => {
    if (!newPassword) {
      setIsFirstRender(true);
    }

    if (newPassword?.length >= 8) setIsFirstRender(false);
    else setIsFirstRender(true);
  }, [newPassword]);

  const { sessionToken, previousPassword } = props;
  const isLoggedIn = useRecoilValue(LogInState);
  const currentUser = useRecoilValue(UserState);

  const passwordValidate = (newPassword: string) => {
    if (newPassword === previousPassword) {
      return '현재 비밀번호와 다른 비밀번호를 입력해주세요.';
    }

    const regexp = /^(?=.*[a-zA-Z])(?=.*[0-9]).*$/;

    if (!regexp.test(newPassword)) {
      return '숫자와 영문자 조합으로 8자 이상 입력해주세요.';
    }

    return true;
  };

  const passwordCheckValidate = (newPasswordCheck: string) => {
    if (newPasswordCheck === newPassword) return true;

    return '비밀번호가 일치하지 않습니다.';
  };

  const onSubmit = async () => {
    if (!isLoggedIn || !currentUser) {
      navigate('/Login');
      return;
    }

    const { data, error } = await postChangePassword({
      email: currentUser.email,
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

  return {
    newPassword,
    isFirstRender,
    register,
    handleSubmit,
    onSubmit,
    passwordValidate,
    errors,
    passwordCheckValidate,
  };
};
