import { useMutation } from '@tanstack/react-query';

import { postChangePassword } from '@/home/apis/postChangePassword';
import { api } from '@/service/TokenService';

export const usePostChangePassword = () => {
  return useMutation({
    mutationFn: postChangePassword,
    onSuccess: (data) => {
      api.setAccessToken(data.accessToken, data.accessTokenExpiredIn);
      api.setRefreshToken(data.refreshToken, data.refreshTokenExpiredIn);
    },
  });
};
