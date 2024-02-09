import { PropsWithChildren } from 'react';

import { Outlet } from 'react-router-dom';

import { Nav } from '../Nav/Nav';

import { StyledLayout } from './HomeLayout.style';
export const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <StyledLayout>
      <Nav isLoggedIn={true} />
      {children || <Outlet />}
    </StyledLayout>
  );
};
