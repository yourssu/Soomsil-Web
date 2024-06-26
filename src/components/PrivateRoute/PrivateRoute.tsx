import { useEffect } from 'react';

import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSetRecoilState, useRecoilValue } from 'recoil';

import { LogInState } from '@/home/recoil/LogInState';
import { useResetUserInfo } from '@/hooks/useResetUserInfo';
import { DialogState } from '@/recoil/DialogState';
import { api } from '@/service/TokenService';

export const PrivateRoute = ({
  toPath = '/login',
  isModalOpen = false,
}: {
  toPath?: string;
  isModalOpen?: boolean;
}): React.ReactNode => {
  const setDialog = useSetRecoilState(DialogState);
  const isLoggedIn = useRecoilValue(LogInState);
  const accessToken = api.getAccessToken();
  const resetUserInfo = useResetUserInfo();
  const location = useLocation();

  useEffect(() => {
    if (!isLoggedIn || !accessToken) {
      resetUserInfo();
      if (isModalOpen) {
        setDialog({ open: true, type: 'login', goBack: location.state?.from == undefined });
      }
    }
  }, [isLoggedIn, accessToken, resetUserInfo, setDialog, isModalOpen, location]);

  if (!isLoggedIn || !accessToken) {
    if (isModalOpen) return;
    return <Navigate to={toPath} />;
  }

  return <Outlet />;
};
