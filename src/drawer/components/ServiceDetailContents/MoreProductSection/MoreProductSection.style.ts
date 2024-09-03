import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMoreProductSection = styled.div`
  width: 18rem;
  height: fit-content;
  display: grid;
  gap: 2rem;
  padding: 0 0.5rem;
  margin-left: 5.25rem;

  ${({ theme }) => theme.typo.title3};
  color: ${({ theme }) => theme.color.textPrimary};
`;

export const StyledLink = styled(Link)`
  width: 3rem;
  height: 3rem;
  margin-left: 0.625rem;
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;
