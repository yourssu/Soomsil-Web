import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  padding: 0 40px;
  align-items: center;
  width: 100%;
  height: 64px;
  position: sticky;
`;

export const StyledHeaderLogo = styled(Link)`
  display: flex;
`;

export const StyledHeaderTabs = styled.nav`
  display: flex;
  margin-left: 120px;
`;

export const StyledHeaderTab = styled(NavLink)`
  ${({ theme }) => theme.typo.caption0}
  display: flex;
  position: relative;
  padding: 24px;
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
    height: 8px;
    border-radius: 8px 8px 0 0;
    background-color: ${({ theme }) => theme.color.textPointed};
  }
`;

export const StyledHeaderSearchContainer = styled.div`
  display: flex;
  width: 552px;
  height: 44px;
  border: 1px solid ${({ theme }) => theme.color.borderThick};
  border-radius: 100px;
  padding: 12px 16px;
  gap: 4px;
`;

export const StyledHeaderSearchInput = styled.input`
  width: 100%;
  height: 20px;
  border: none;
  outline: none;
  background-color: transparent;
`;

export const StyledHeaderSearchIcon = styled.img`
  width: 18px;
  height: 18px;
`;

export const StyledHeaderIconButton = styled.button`
  margin-left: 16px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const StyledHeaderUserIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const StyledSpacer = styled.div`
  flex-grow: 1;
`;
