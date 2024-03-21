import { PropsWithChildren, useEffect, useState } from 'react';

import moment from 'moment';
import { Outlet, useLocation } from 'react-router-dom';

import api from '@/service/TokenService';

import { Nav } from '../Nav/Nav';

import { StyledLayout } from './HomeLayout.style';
export const HomeLayout = ({ children }: PropsWithChildren) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useLocation();
  const accessToken = api.getAccessToken();
  const accessExpiredIn = sessionStorage.getItem('accessExpiredIn');
  useEffect(() => {
    if (accessToken == null || moment(accessExpiredIn).diff(moment()) < 0) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [accessToken, accessExpiredIn]);

  return (
    <StyledLayout>
      {router.pathname === '/' && <Nav isLoggedIn={isLoggedIn} />}
      {children || <Outlet />}
    </StyledLayout>
  );
};
