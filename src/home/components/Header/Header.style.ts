import styled from 'styled-components';

import Background from '@/assets/home/background.png';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  width: 100%;
  height: 40vh;

  background-image: url(${Background});
  background-size: cover;
  background-position: center;
`;

export const StyledSearchBarContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;

  margin-bottom: 2.8125rem;
`;

export const StyledSoomsilLogo = styled.img`
  height: 3.75rem;
`;

export const StyledSearchBar = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 46.6875rem;
  padding: 1.0625rem 2rem 1rem 2.5rem;

  border-radius: 4rem 3.125rem 3.125rem 0.125rem;
  border: 0.1875rem solid #423fcc;
`;

export const StyledSearchBox = styled.input`
  width: 38.75rem;
  background-color: transparent;

  ${({ theme }) => theme.typo.display3};
  color: ${({ theme }) => theme.color.textSecondary};
`;

export const StyledSubmitButton = styled.button`
  width: 2rem;
  height: 2rem;
`;
