import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 64px;
  position: sticky;
`;

export const StyledHeaderLogo = styled.img`
  margin-left: 40px;
`;

export const StyledHeaderTabs = styled.nav`
  display: flex;
  margin-left: 120px;
`;

export const StyledHeaderTab = styled(NavLink)`
  display: flex;
  position: relative;
  padding: 24px;
  font-style: ${({ theme }) => theme.typo.caption0}
  color: ${({ theme }) => theme.color.textTertiary};
  text-decoration: none;
  cursor: pointer;
  
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
