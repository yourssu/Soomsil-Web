import { ErrorBoundary } from 'react-error-boundary';
import { Outlet, useLocation } from 'react-router-dom';

import { FallbackDrawer } from '@/drawer/components/FallbackDrawer/FallbackDrawer';
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
      <ErrorBoundary
        fallbackRender={(fallbackProps) => <FallbackDrawer {...fallbackProps} />}
        resetKeys={[location.pathname]}
      >
        <Outlet />
      </ErrorBoundary>
      <Footer />
    </StyledLayout>
  );
};
