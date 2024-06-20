import { RouteProps, Navigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { LogInState } from '@/home/recoil/LogInState';
import { UserState } from '@/home/recoil/UserState';
import { api } from '@/service/TokenService';

export const usePrivateRoute = () => {
  const isLoggedIn = useRecoilValue(LogInState);
  const accessToken = api.getAccessToken();

  const setLogInState = useSetRecoilState(LogInState);
  const setUserState = useSetRecoilState(UserState);

  const PrivateRoute = ({ element }: RouteProps): React.ReactNode => {
    if (!isLoggedIn || !accessToken) {
      api.logout();
      setUserState(null);
      setLogInState(false);
      return <Navigate to="/login" />;
    }
    return element;
  };

  return { PrivateRoute };
};
