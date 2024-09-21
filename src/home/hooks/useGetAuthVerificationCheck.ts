import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { getAuthVerificationCheck } from '@/home/apis/getAuthVerificationCheck';
import { AuthErrorData } from '@/home/types/Auth.type';

export const useGetAuthVerificationCheck = () => {
  return useMutation({
    mutationFn: getAuthVerificationCheck,
    throwOnError: (error: AxiosError<AuthErrorData>) => {
      if (error.response?.status === 401) return false;
      return true;
    },
  });
};
