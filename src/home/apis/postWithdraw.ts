import { authClient } from '@/apis';
import { api } from '@/service/TokenService';

export const postWithdraw = async (data: object) => {
  const res = await authClient.post('/auth/withdraw', data, {
    headers: api.headers,
  });
  return res.data;
};
