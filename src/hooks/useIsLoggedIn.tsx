import { useRecoilValue } from 'recoil';

import { useGetUserData } from '@/home/hooks/useGetUserData';
import { UserState } from '@/home/recoil/UserState';
import { api } from '@/service/TokenService';

export const useIsLoggedIn = () => {
  const isLoggedIn = api.getAccessToken() !== undefined;
  const currentUser = useRecoilValue(UserState);
  const { refetch } = useGetUserData();

  if (isLoggedIn && !currentUser) refetch();

  return isLoggedIn;
};
