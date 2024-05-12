import React, { useState } from 'react';

import { IcSearchLine, IconContext } from '@yourssu/design-system-react';
import { useNavigate } from 'react-router-dom';

import SoomsilLogo from '@/assets/soomsil_logo.svg';

import {
  StyledContainer,
  StyledSearchBar,
  StyledSearchBarContainer,
  StyledSearchBox,
  StyledSoomsilLogo,
  StyledSubmitButton,
} from './Header.style';

export const Header = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?query=${keyword}`);
  };

  return (
    <StyledContainer>
      <StyledSearchBarContainer>
        <StyledSoomsilLogo src={SoomsilLogo} alt="soomsil" />
        <StyledSearchBar onSubmit={handleSubmit}>
          <StyledSearchBox type="text" value={keyword} onChange={handleChange} />
          <StyledSubmitButton type="submit">
            <IconContext.Provider
              value={{
                color: '#423FCC',
              }}
            >
              <IcSearchLine />
            </IconContext.Provider>
          </StyledSubmitButton>
        </StyledSearchBar>
      </StyledSearchBarContainer>
    </StyledContainer>
  );
};
