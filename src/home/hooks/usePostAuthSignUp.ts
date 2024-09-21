import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { postAuthSignUp } from '../apis/postAuthSignUp';
import { AuthErrorData } from '../types/Auth.type';

export const usePostAuthSignUp = () => {
  return useMutation({
    mutationFn: postAuthSignUp,
    throwOnError: (error: AxiosError<AuthErrorData>) => {
      return error.response?.status !== 401;
    },
  });
};
