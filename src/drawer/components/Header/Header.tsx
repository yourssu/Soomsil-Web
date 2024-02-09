import personCircleIcon from '@/assets/ic_personcircle.svg';
import searchIcon from '@/assets/ic_search.svg';
import soomsil from '@/assets/soomsil.svg';

import {
  StyledHeader,
  StyledHeaderLogo,
  StyledHeaderTab,
  StyledHeaderTabs,
  StyledHeaderSearchContainer,
  StyledHeaderSearchInput,
  StyledHeaderSearchIcon,
  StyledHeaderUserIcon,
  StyledHeaderIconButton,
  StyledSpacer,
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
      <StyledSpacer />
      <StyledHeaderSearchContainer>
        <StyledHeaderSearchInput type="text" />
        <StyledHeaderSearchIcon src={searchIcon} alt="searchIcon" />
      </StyledHeaderSearchContainer>
      <StyledHeaderIconButton>
        <StyledHeaderUserIcon src={personCircleIcon} alt="personCircleIcon" />
      </StyledHeaderIconButton>
    </StyledHeader>
  );
};

export default Header;
