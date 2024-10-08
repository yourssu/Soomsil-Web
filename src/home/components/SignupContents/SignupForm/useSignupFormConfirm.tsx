import { AxiosError } from 'axios';
import { SubmitHandler } from 'react-hook-form';

import { STORAGE_KEYS } from '@/constants/storage.constant';
import { usePostAuthSignUp } from '@/home/hooks/usePostAuthSignUp';
import { AuthErrorData } from '@/home/types/Auth.type';

import { SignupFormProps, SignupFormStates } from './SignUpForm.type';

export const useSignupFormConfirm = ({ email, onConfirm }: SignupFormProps) => {
  const postAuthSignUpMutation = usePostAuthSignUp();

  const onSignupError = (error: AxiosError) => {
    alert(
      (error as AxiosError<AuthErrorData>).response?.data.message || '회원가입에 실패했습니다.'
    );
  };

  const onSignupSuccess = () => {
    sessionStorage.removeItem(STORAGE_KEYS.EMAIL_AUTH_SESSION_TOKEN);
    sessionStorage.removeItem(STORAGE_KEYS.EMAIL_AUTH_SESSION_TOKEN_EXPIRED_IN);
    onConfirm();
  };

  const onFormConfirm: SubmitHandler<SignupFormStates> = async ({ nickname, password }) => {
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

    postAuthSignUpMutation.mutate(signUpParams, {
      onSuccess: onSignupSuccess,
      onError: onSignupError,
    });
  };

  return onFormConfirm;
};
