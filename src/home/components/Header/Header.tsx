import { IcSearchLine, IconContext } from '@yourssu/design-system-react';

import SoomsilLogo from '@/assets/soomsil_v2_logo.svg';

import {
  StyledSearchBar,
  StyledSearchBarContainer,
  StyledContainer,
  StyledSearchBox,
  StyledSoomsilLogo,
} from './Header.style';

export const Header = () => {
  return (
    <StyledContainer>
      <StyledSearchBarContainer>
        <StyledSoomsilLogo src={SoomsilLogo} alt="soomsil" />
        <StyledSearchBar>
          <StyledSearchBox />
          <IconContext.Provider
            value={{
              color: '#423FCC',
              size: '2rem',
            }}
          >
            <IcSearchLine />
          </IconContext.Provider>
        </StyledSearchBar>
      </StyledSearchBarContainer>
    </StyledContainer>
  );
};
