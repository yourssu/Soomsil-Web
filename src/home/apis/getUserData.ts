import { soomsilClient } from '@/apis';
import { UserData } from '@/home/types/user.type';

export const getUserData = async (): Promise<UserData> => {
  const { data } = await soomsilClient.get('/v2/users');
  return data;
};
