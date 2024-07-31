import styled from 'styled-components';

interface StyledSpacingProps {
  $direction: 'horizontal' | 'vertical';
  $size: number;
}

export const StyledSpacing = styled.div<StyledSpacingProps>`
  ${({ $direction, $size }) =>
    $direction === 'horizontal' ? { width: `${$size}px` } : { height: `${$size}px` }}
`;
