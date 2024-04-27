import { useEffect, useState } from 'react';

import { isPast } from 'date-fns';
import { useRecoilValue } from 'recoil';

import { useGetUserData } from '@/home/hooks/useGetUserData';
import { UserState } from '@/home/recoil/UserState';
import { api } from '@/service/TokenService';

export const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const accessToken = api.getAccessToken();
  const accessTokenExpiredIn = sessionStorage.getItem('accessExpiredIn');
  const currentUser = useRecoilValue(UserState);
  const { refetch } = useGetUserData();

  const isAccessTokenExpired = () => {
    if (!accessTokenExpiredIn) return false;
    if (!accessToken) return false;
    return isPast(new Date(accessTokenExpiredIn));
  };

  useEffect(() => {
    if (!accessTokenExpiredIn) return;

    if (isAccessTokenExpired()) {
      setIsLoggedIn(false);
      return;
    }

    setIsLoggedIn(true);

    if (!currentUser) refetch();
  }, [accessToken, accessTokenExpiredIn]);

  return isLoggedIn;
};
