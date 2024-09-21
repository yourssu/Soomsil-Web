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
      return error.response?.status !== 400;
    },
  });
};
