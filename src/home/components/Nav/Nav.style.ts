import { NavLink } from 'react-router-dom';
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

export const StyledNonLoginText = styled(NavLink)`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.baseColor.logoViolet};
`;

export const StyledDropDownName = styled.div`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.textPrimary};
`;

export const StyledDropDownEmail = styled.div`
  ${({ theme }) => theme.typo.caption1};
  color: ${({ theme }) => theme.color.textDisabled};
`;

export const StyledDropDownMyPage = styled(NavLink)`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.textPrimary};
  padding-top: 1.25rem;
`;

export const StyledDropDownLogout = styled.div`
  ${({ theme }) => theme.typo.body2};
  padding-top: 0.75rem;
  cursor: pointer;
`;
