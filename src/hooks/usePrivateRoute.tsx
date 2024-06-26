import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { LogInState } from '@/home/recoil/LogInState';
import { api } from '@/service/TokenService';

import { useResetUserInfo } from './useResetUserInfo';

export const usePrivateRoute = () => {
  const isLoggedIn = useRecoilValue(LogInState);
  const accessToken = api.getAccessToken();

  const resetUserInfo = useResetUserInfo();

  const PrivateRoute = (): React.ReactNode => {
    if (!isLoggedIn || !accessToken) {
      resetUserInfo();
      return <Navigate to="/login" />;
    }
    return <Outlet />;
  };

  return { PrivateRoute };
};
