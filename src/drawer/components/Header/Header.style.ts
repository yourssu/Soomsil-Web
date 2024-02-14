import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
  /* TODO: 추후 반응형 적용 필요 */
  padding-right: 10%;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.color.bgNormal};
  border-bottom: 1px solid ${({ theme }) => theme.color.borderNormal};
`;

export const StyledHeaderLogo = styled(Link)`
  margin-left: 2.5rem;
  display: flex;
`;

export const StyledHeaderTabs = styled.nav`
  display: flex;
  /* TODO: 추후 반응형 적용 필요 */
  margin-left: 10%;
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
  /* TODO: 추후 반응형 적용 필요 */
  width: 30%;
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
