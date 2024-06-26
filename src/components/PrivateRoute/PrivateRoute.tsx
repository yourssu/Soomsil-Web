import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { LogInState } from '@/home/recoil/LogInState';
import { useResetUserInfo } from '@/hooks/useResetUserInfo';
import { api } from '@/service/TokenService';

export const PrivateRoute = ({ toPath = '/login' }: { toPath?: string }): React.ReactNode => {
  const isLoggedIn = useRecoilValue(LogInState);
  const accessToken = api.getAccessToken();
  const resetUserInfo = useResetUserInfo();

  if (!isLoggedIn || !accessToken) {
    resetUserInfo();
    return <Navigate to={toPath} />;
  }

  return <Outlet />;
};
