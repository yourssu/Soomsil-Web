import { Link } from 'react-router-dom';

import logo from '@/assets/soomsil.svg';

import { StyledLogo, StyledSearchBar, StyledSearchBoxWrap } from './SearchBar.style';
import { SearchBox } from './SearchBox';

export const SearchBar = () => {
  return (
    <StyledSearchBar>
      <StyledSearchBoxWrap>
        <Link to="/">
          <StyledLogo src={logo} alt="logo" />
        </Link>
        <SearchBox size="large" />
      </StyledSearchBoxWrap>
    </StyledSearchBar>
  );
};
