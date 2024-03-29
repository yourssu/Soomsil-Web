import { Outlet, useLocation } from 'react-router-dom';

import { useMediaQuery } from '@/hooks/useMediaQuery';

import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { MobileRegisterHeader } from '../Header/MobileRegisterHeader';

import { StyledLayout } from './Layout.style';

export const Layout = () => {
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width: 30rem)');

  const isMobileRegisterRoute = isMobile && location.pathname === '/drawer/register';

  return (
    <StyledLayout>
      {isMobileRegisterRoute ? <MobileRegisterHeader /> : <Header />}
      <Outlet />
      <Footer />
    </StyledLayout>
  );
};
