import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { UseFormSetError } from 'react-hook-form';

import { postChangePassword } from '@/home/apis/postChangePassword';
import { AuthErrorData } from '@/home/types/Auth.type';
import { FormData } from '@/home/types/password.type';
import { api } from '@/service/TokenService';

interface usePostChangePasswordProps {
  onSuccessFunction: () => void;
  setError: UseFormSetError<FormData>;
}

export const usePostChangePassword = (props: usePostChangePasswordProps) => {
  const { onSuccessFunction, setError } = props;

  return useMutation({
    mutationFn: postChangePassword,
    onSuccess: (data) => {
      api.setAccessToken(data.accessToken, data.accessTokenExpiredIn);
      api.setRefreshToken(data.refreshToken, data.refreshTokenExpiredIn);
      onSuccessFunction();
    },
    onError: (error: AxiosError) => {
      const serverError = error.response?.data as AuthErrorData;
      const errorMessage =
        serverError?.error === 'Auth-007'
          ? '현재 비밀번호와 다른 비밀번호를 입력해주세요.'
          : serverError?.message || '비밀번호 변경 중 오류가 발생했습니다.';
      setError('password', { type: 'manual', message: errorMessage });
    },
  });
};
