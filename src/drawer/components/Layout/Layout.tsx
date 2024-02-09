import { Outlet } from 'react-router-dom';

import { Footer } from '../Footer/Footer';
import Header from '../Header/Header';

import { StyledLayout } from './Layout.style';

export const Layout = () => {
  return (
    <StyledLayout>
      <Header />
      <Outlet />
      <Footer />
    </StyledLayout>
  );
};
