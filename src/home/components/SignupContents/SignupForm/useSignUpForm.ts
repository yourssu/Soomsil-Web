import { useState } from 'react';

import { AxiosError } from 'axios';

import { STORAGE_KEYS } from '@/constants/storage.constant.ts';
import { postAuthSignUp } from '@/home/apis/postAuthSignUp.ts';
import { SignupFormProps } from '@/home/components/SignupContents/SignupForm/SignUpForm.type.ts';
import { AuthErrorData } from '@/home/types/Auth.type.ts';

export const useSignUpForm = ({ email, onConfirm }: SignupFormProps) => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const onFormConfirm = async () => {
    const sessionToken = sessionStorage.getItem(STORAGE_KEYS.EMAIL_AUTH_SESSION_TOKEN);

    if (!sessionToken) {
      alert('세션 토큰이 없습니다.');
      return;
    }

    const signUpParams = {
      nickName: nickname,
      password: password,
      sessionToken: sessionToken,
      email: email,
    };

    const { data, error } = await postAuthSignUp(signUpParams);

    if (data) {
      sessionStorage.removeItem(STORAGE_KEYS.EMAIL_AUTH_SESSION_TOKEN);
      sessionStorage.removeItem(STORAGE_KEYS.EMAIL_AUTH_SESSION_TOKEN_EXPIRED_IN);
      onConfirm();
    } else if (error) {
      alert(
        (error as AxiosError<AuthErrorData>).response?.data.message || '회원가입에 실패했습니다.'
      );
    }
  };

  return { nickname, password, onFormConfirm, setNickname, setPassword };
};
