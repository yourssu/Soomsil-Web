import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
  padding: 0 40px;
  position: sticky;
`;

export const StyledHeaderLogo = styled(Link)`
  display: flex;
`;

export const StyledHeaderTabs = styled.nav`
  display: flex;
  margin-left: 7.5rem;
`;

export const StyledHeaderTab = styled(NavLink)`
  ${({ theme }) => theme.typo.caption0}
  display: flex;
  position: relative;
  padding: 1.5rem;
  color: ${({ theme }) => theme.color.textTertiary};
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;

  &.active::after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: 60%;
    height: 0.5rem;
    border-radius: 0.5rem 0.5rem 0 0;
    background-color: ${({ theme }) => theme.color.textPointed};
  }
`;

export const StyledHeaderSearchContainer = styled.div`
  display: flex;
  width: 34.5rem;
  height: 2.75rem;
  border: 1px solid ${({ theme }) => theme.color.borderThick};
  border-radius: 6.25rem;
  padding: 0.75rem 1rem;
  gap: 0.25rem;
`;

export const StyledHeaderSearchInput = styled.input`
  width: 100%;
  height: 1.25rem;
  border: none;
  outline: none;
  background-color: transparent;
`;

export const StyledHeaderSearchIcon = styled.img`
  width: 1.125rem;
  height: 1.125rem;
`;

export const StyledHeaderIconButton = styled.button`
  margin-left: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const StyledHeaderUserIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const StyledSpacer = styled.div`
  flex-grow: 1;
`;
