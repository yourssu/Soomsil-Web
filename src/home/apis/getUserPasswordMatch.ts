import { authClient } from '@/apis';
import { SessionTokenType } from '@/home/types/GetPassword.type';
import { api } from '@/service/TokenService';

export const getUserPasswordMatch = async (password: string): Promise<SessionTokenType> => {
  const res = await authClient.get('/auth/verification/password', {
    params: { password },
    headers: api.headers,
  });
  return res.data;
};
