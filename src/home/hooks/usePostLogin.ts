import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';

import { api } from '@/service/TokenService';

import { postAuthSignIn } from '../apis/postAuthSignIn';
import { LogInState } from '../recoil/LogInState';

export const usePostLogin = () => {
  const queryClient = useQueryClient();
  const setIsLoggedIn = useSetRecoilState(LogInState);

  return useMutation({
    mutationFn: postAuthSignIn,
    onSuccess: (data) => {
      api.setAccessToken(data.accessToken, data.accessTokenExpiredIn);
      api.setRefreshToken(data.refreshToken, data.refreshTokenExpiredIn);
      setIsLoggedIn(true);
      queryClient.invalidateQueries({ queryKey: ['userData'] });
    },
    throwOnError: (error) => {
      // response status code가 401일 경우 에러가 ErrorBoundary로 전달되지 않도록 함
      if (axios.isAxiosError(error)) {
        return error.response?.status != 401;
      }

      return true;
    },
  });
};
