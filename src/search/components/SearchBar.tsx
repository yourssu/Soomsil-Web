import logo from '../assets/Logo.svg';

import { StyledSearchBar } from './SearchBar.style';
import SearchBox from './SearchBox';
import Spacing from './Spacing';

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <img src={logo} alt="logo" />
      <Spacing direction="horizontal" size={20} />
      <SearchBox size="large" />
    </StyledSearchBar>
  );
};

export default SearchBar;
