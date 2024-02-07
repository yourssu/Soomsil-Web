import soomsil from '@/assets/soomsil.svg';

import { StyledHeader, StyledHeaderLogo } from './Header.style';

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderLogo src={soomsil} alt="soomsil" />
    </StyledHeader>
  );
};

export default Header;
