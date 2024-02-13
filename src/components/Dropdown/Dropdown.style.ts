import styled from 'styled-components';

import { DropdownProps } from './Dropdown';

export const StyledContainer = styled.div<DropdownProps>`
  padding: ${(props) => props.padding};
  left: ${(props) => props.left};
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 10;
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.color.bgNormal};
  box-shadow: 0px 1px 3px 0px rgba(107, 114, 128, 0.4);
`;
