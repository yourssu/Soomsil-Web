import { ErrorBoundary } from 'react-error-boundary';
import { Outlet, useLocation } from 'react-router-dom';

import { Fallback } from '@/components/Fallback/Fallback';
import { useMediaQuery } from '@/hooks/useMediaQuery';

import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

import { StyledLayout } from './Layout.style';

export const Layout = () => {
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width: 30rem)');

  const isMobileRegisterRoute = isMobile && location.pathname === '/drawer/register';

  return (
    <StyledLayout>
      {isMobileRegisterRoute ? null : <Header />}
      <ErrorBoundary
        fallbackRender={(fallbackProps) => <Fallback {...fallbackProps} />}
        resetKeys={[location.pathname]}
      >
        <Outlet />
      </ErrorBoundary>
      <Footer />
    </StyledLayout>
  );
};
