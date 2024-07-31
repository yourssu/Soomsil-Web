import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { ProfileIconButton } from '@/components/ProfileIconButton/ProfileIconButton';
import { Z_INDEX } from '@/constants/zIndex.constant';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
  padding-right: 10vw;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.color.bgNormal};
  border-bottom: 1px solid ${({ theme }) => theme.color.borderNormal};

  z-index: ${Z_INDEX.drawerHeader};
`;

export const StyledHeaderLogo = styled(Link)`
  display: flex;
  margin-left: 2.5rem;
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
  width: 30vw;
  height: 2.75rem;
  border: 1px solid ${({ theme }) => theme.color.buttonNormalPressed};
  border-radius: 6.25rem;
  padding: 0.75rem 1rem;
  gap: 0.25rem;
`;

export const StyledHeaderSearchInput = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.color.textPrimary};
  height: 1.25rem;
  border: none;
  outline: none;
  background-color: transparent;
`;

export const StyledProfileIconButton = styled(ProfileIconButton)`
  margin-left: 1rem;
`;
