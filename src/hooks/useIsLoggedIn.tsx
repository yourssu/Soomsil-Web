import { useEffect, useState } from 'react';

import { useRecoilValue } from 'recoil';

import { useGetUserData } from '@/home/hooks/useGetUserData';
import { UserState } from '@/home/recoil/UserState';
import { api } from '@/service/TokenService';

export const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(api.getAccessToken() !== undefined);
  const currentUser = useRecoilValue(UserState);
  const { refetch } = useGetUserData();

  if (isLoggedIn && !currentUser) refetch();

  useEffect(() => {
    const tokenUpdated = (e: Event) => {
      setIsLoggedIn((e as CustomEvent).detail.token !== undefined);
    };

    window.addEventListener('accessTokenUpdated', tokenUpdated);
    return () => {
      window.removeEventListener('accessTokenUpdated', tokenUpdated);
    };
  }, []);

  return isLoggedIn;
};
