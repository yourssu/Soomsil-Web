import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { postChangePassword } from '@/home/apis/postChangePassword';
import { api } from '@/service/TokenService';

export const usePostChangePassword = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: postChangePassword,
    onSuccess: (data) => {
      api.setAccessToken(data.accessToken, data.accessTokenExpiredIn);
      api.setRefreshToken(data.refreshToken, data.refreshTokenExpiredIn);
      navigate('/mypage');
    },
    onError: () => {
      navigate('/Login');
    },
  });
};
