import { Outlet } from 'react-router-dom';

import { StyledLayout } from './Layout.style';
import { Footer } from '../Footer/Footer';

export const Layout = () => {
  return (
    <StyledLayout>
      {/* 헤더 */}
      <Outlet />
      <Footer />
    </StyledLayout>
  );
};
