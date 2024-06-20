import { RouteProps, Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { LogInState } from '@/home/recoil/LogInState';

export const usePrivateRoute = () => {
  const isLoggedIn = useRecoilValue(LogInState);

  const PrivateRoute = ({ element }: RouteProps): React.ReactNode => {
    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }
    return element;
  };

  return { PrivateRoute };
};
