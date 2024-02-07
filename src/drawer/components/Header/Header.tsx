import { Link } from 'react-router-dom';

import soomsil from '@/assets/soomsil.svg';

import { StyledHeader, StyledHeaderLogo, StyledHeaderTab, StyledHeaderTabs } from './Header.style';

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/drawer">
        <StyledHeaderLogo src={soomsil} alt="soomsil" />
      </Link>
      <StyledHeaderTabs>
        <StyledHeaderTab to="rankings">랭킹</StyledHeaderTab>
        <StyledHeaderTab to="register">서비스 등록</StyledHeaderTab>
        <StyledHeaderTab to="myDrawers">내 서랍장</StyledHeaderTab>
      </StyledHeaderTabs>
    </StyledHeader>
  );
};

export default Header;
