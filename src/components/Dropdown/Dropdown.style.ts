import styled from 'styled-components';

interface StyledDropDownProps {
  $padding: string;
  $bottom: string;
  $right?: string;
  $left?: string;
}

export const StyledContainer = styled.div<StyledDropDownProps>`
  padding: ${(props) => props.$padding};
  left: ${(props) => props.$left};
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 10;
  bottom: ${(props) => props.$bottom};
  right: ${(props) => props.$right};
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.color.bgNormal};
  box-shadow: 0px 1px 3px 0px rgba(107, 114, 128, 0.4);
`;
