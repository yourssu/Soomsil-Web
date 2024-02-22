import { PropsWithChildren } from 'react';

import { Outlet, useLocation } from 'react-router-dom';

import { Nav } from '../Nav/Nav';

import { StyledLayout } from './HomeLayout.style';
export const HomeLayout = ({ children }: PropsWithChildren) => {
  const router = useLocation();

  return (
    <StyledLayout>
      {router.pathname === '/' ? <Nav isLoggedIn={false} /> : null}
      {children || <Outlet />}
    </StyledLayout>
  );
};
