import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { authClient } from '@/apis';
import { STORAGE_KEYS } from '@/constants/storage.constant.ts';

import {
  AuthErrorData,
  GetAuthVerificationCheckData,
  PostAuthVerificationEmailData,
} from '../types/Auth.type';

interface EmailVerificationParams {
  email: string;
  verificationType: 'SIGN_UP' | 'PASSWORD';
}

interface VerificationCheckParams {
  session: string;
}

export const postAuthVerificationEmail = async (
  emailVerificationParams: EmailVerificationParams
): Promise<PostAuthVerificationEmailData> => {
  const res = await authClient.post(`/auth/verification/email`, emailVerificationParams);
  return res.data;
};

export const usePostAuthVerificationEmail = () => {
  return useMutation({
    mutationFn: postAuthVerificationEmail,
    onSuccess: (data) => {
      sessionStorage.setItem(STORAGE_KEYS.EMAIL_AUTH_SESSION_TOKEN, data.sessionToken);
      sessionStorage.setItem(
        STORAGE_KEYS.EMAIL_AUTH_SESSION_TOKEN_EXPIRED_IN,
        data.sessionTokenExpiredIn.toString()
      );
    },
    throwOnError: (error: AxiosError<AuthErrorData>) => {
      //이전과 같은 이메일일 경우 errorBoundary로 가지 않고 에러 처리
      if (error.response?.status === 400) return false;
      // 나머지는 errorBoundary로 처리
      return true;
    },
  });
};

export const getAuthVerificationCheck = async (
  verificationCheckParams: VerificationCheckParams
): Promise<GetAuthVerificationCheckData> => {
  const res = await authClient.get('/auth/verification/check', {
    params: verificationCheckParams,
  });
  return res.data;
};

export const useGetAuthVerificationCheck = () => {
  return useMutation({
    mutationFn: getAuthVerificationCheck,
    throwOnError: (error: AxiosError<AuthErrorData>) => {
      if (error.response?.status === 401) return false;
      return true;
    },
  });
};
