import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  position: absolute;
  top: 6%;
  right: calc(50% - 39.1875rem);
`;

export const StyledProfileContainer = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`;
export const StyledNonLoginContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const StyledColDivider = styled.div`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.baseColor.logoViolet};
`;

export const StyledNonLoginText = styled(Link)`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.baseColor.logoViolet};
`;
