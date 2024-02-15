import { Link } from 'react-router-dom';

import logo from '../../assets/Logo.svg';
import Spacing from '../Spacing/Spacing';

import { StyledSearchBar } from './SearchBar.style';
import SearchBox from './SearchBox';

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <Spacing direction="horizontal" size={20} />
      <SearchBox size="large" />
    </StyledSearchBar>
  );
};

export default SearchBar;
