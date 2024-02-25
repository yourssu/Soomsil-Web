import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.75rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;

  background-color: ${({ theme }) => theme.color.bgNormal};
  border-bottom: 1px solid ${({ theme }) => theme.color.borderNormal};
`;

export const StyledHeaderTab = styled(Link)`
  /* Soomsil/Drawer/Web/body10 */
  font-family: 'Spoqa Han Sans Neo';
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0.25px;

  position: relative;

  padding: 0.96875rem; 1.5rem;

  color: ${({ theme }) => theme.color.textTertiary};

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: 60%;
    height: 0.25rem;
    border-radius: 0.5rem 0.5rem 0 0;
    background-color: ${({ theme }) => theme.color.textPointed};
  }
`;
