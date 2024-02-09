import { PropsWithChildren } from 'react';

import { Outlet } from 'react-router-dom';

import { Nav } from '../Nav/Nav';

import { StyledLayout } from './Layout.style';
export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <StyledLayout>
      <Nav isLoggedIn={false} />
      {children || <Outlet />}
    </StyledLayout>
  );
};
