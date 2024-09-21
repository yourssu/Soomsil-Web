import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { STORAGE_KEYS } from '@/constants/storage.constant';
import { postAuthVerificationEmail } from '@/home/apis/postAuthVerificationEmail';
import { AuthErrorData } from '@/home/types/Auth.type';

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
