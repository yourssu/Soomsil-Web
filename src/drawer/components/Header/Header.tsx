import { IcPersoncircleLine, IcSearchLine, IconContext } from '@yourssu/design-system-react';

import soomsil from '@/assets/soomsil.svg';

import {
  StyledHeader,
  StyledHeaderLogo,
  StyledHeaderTab,
  StyledHeaderTabs,
  StyledHeaderSearchContainer,
  StyledHeaderSearchInput,
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
        <IconContext.Provider
          value={{
            color: '#8E9398',
            size: '1.125rem',
          }}
        >
          <IcSearchLine />
        </IconContext.Provider>
      </StyledHeaderSearchContainer>
      <StyledHeaderIconButton>
        <IconContext.Provider
          value={{
            color: '#816DEC',
            size: '2rem',
          }}
        >
          <IcPersoncircleLine />
        </IconContext.Provider>
      </StyledHeaderIconButton>
    </StyledHeader>
  );
};

export default Header;
