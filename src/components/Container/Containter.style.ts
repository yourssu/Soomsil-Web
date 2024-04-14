import styled from 'styled-components';

interface StyledContainerProps {
  $animationDuration: number;
  $isFinished: boolean;
}

export const StyledContainer = styled.div<StyledContainerProps>`
  height: 4px;
  pointer-events: none;
  transition: ${(props) => `opacity ${props.$animationDuration}ms linear`};
`;
