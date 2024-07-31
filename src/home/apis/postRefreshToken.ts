import { authClient } from '@/apis';
import { api } from '@/service/TokenService';

import { PostAuthSignInData } from '../types/Auth.type';

export const postRefreshToken = async (): Promise<PostAuthSignInData> => {
  const { data } = await authClient.post('/auth/refresh', {
    refreshToken: api.getRefreshToken(),
  });

  return data;
};
