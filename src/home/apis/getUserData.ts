import { soomsilClient } from '@/apis';
import { UserData } from '@/home/types/user.type';
import { api } from '@/service/TokenService';

export const getUserData = async (): Promise<UserData> => {
  const { data } = await soomsilClient.get('/v2/users', {
    headers: api.headers,
  });
  return data;
};
