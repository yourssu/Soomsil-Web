import { Outlet } from 'react-router-dom';

import { StyledLayout } from './Layout.style';

export const Layout = () => {
  return (
    <StyledLayout>
      {/* 헤더 */}
      <Outlet />
      {/* 푸터 */}
    </StyledLayout>
  );
};
