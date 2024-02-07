import searchIcon from '@/assets/search_icon.svg';
import soomsil from '@/assets/soomsil.svg';

import {
  StyledHeader,
  StyledHeaderLogo,
  StyledHeaderTab,
  StyledHeaderTabs,
  StyledHeaderSearchContainer,
  StyledHeaderSearchInput,
  StyledHeaderSearchIcon,
} from './Header.style';

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderLogo to="/drawer">
        <img src={soomsil} alt="soomsil" />
      </StyledHeaderLogo>
      <StyledHeaderTabs>
        <StyledHeaderTab to="rankings">랭킹</StyledHeaderTab>
        <StyledHeaderTab to="register">서비스 등록</StyledHeaderTab>
        <StyledHeaderTab to="myDrawers">내 서랍장</StyledHeaderTab>
      </StyledHeaderTabs>
      <StyledHeaderSearchContainer>
        <StyledHeaderSearchInput type="text" />
        <StyledHeaderSearchIcon src={searchIcon} alt="searchIcon" />
      </StyledHeaderSearchContainer>
    </StyledHeader>
  );
};

export default Header;
