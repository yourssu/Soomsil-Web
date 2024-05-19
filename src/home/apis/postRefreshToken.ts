import { AxiosError } from 'axios';

import { authClient } from '@/apis';
import { api } from '@/service/TokenService';

import { AuthErrorData, PostAuthResponse } from '../types/Auth.type';

export const refreshToken = async (): Promise<PostAuthResponse> => {
  try {
    const { data } = await authClient.post('/auth/refresh', {
      refreshToken: api.getRefreshToken(),
    });

    api.setAccessToken(data.accessToken, data.accessTokenExpiredIn);
    api.setRefreshToken(data.refreshToken, data.refreshTokenExpiredIn);

    return data;
  } catch (error: unknown) {
    return { error: error as AxiosError<AuthErrorData> };
  }
};
