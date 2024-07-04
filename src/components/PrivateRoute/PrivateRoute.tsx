import { useEffect } from 'react';

import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSetRecoilState, useRecoilValue } from 'recoil';

import { LogInState } from '@/home/recoil/LogInState';
import { useResetUserInfo } from '@/hooks/useResetUserInfo';
import { DialogState } from '@/recoil/DialogState';
import { api } from '@/service/TokenService';

interface PrivateRouteProps {
  toPath?: string;
  isModalOpen?: boolean;
  modalPath?: string;
}

export const PrivateRoute = ({
  toPath = '/login',
  isModalOpen = false,
  modalPath = '/',
}: PrivateRouteProps) => {
  const setDialog = useSetRecoilState(DialogState);
  const isLoggedIn = useRecoilValue(LogInState);
  const accessToken = api.getAccessToken();
  const resetUserInfo = useResetUserInfo();
  const location = useLocation();

  useEffect(() => {
    if (!isLoggedIn || !accessToken) {
      resetUserInfo();
      if (isModalOpen) {
        setDialog({
          open: true,
          type: 'login',
          redirectPath: location.state?.from == undefined ? modalPath : null,
        });
      }
    }
  }, [isLoggedIn, accessToken, resetUserInfo, setDialog, isModalOpen, modalPath, location]);

  if (!isLoggedIn || !accessToken) {
    if (isModalOpen) return;
    return <Navigate to={toPath} />;
  }

  return <Outlet />;
};
