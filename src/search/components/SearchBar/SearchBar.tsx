import logo from '../../assets/Logo.svg';
import Spacing from '../Spacing';

import { StyledSearchBar } from './SearchBar.style';
import SearchBox from './SearchBox';

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
