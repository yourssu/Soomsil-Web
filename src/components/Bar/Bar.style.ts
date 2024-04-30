import styled from 'styled-components';

interface StyledBarBackgroundProps {
  $progress: number;
  $animationDuration: number;
}

export const StyledBarBackground = styled.div<StyledBarBackgroundProps>`
  background: #423fcc;
  height: 4px;
  left: 0;
  margin-left: ${(props) => `${(props.$progress - 1) * 100}`}%;
  position: fixed;
  top: 0;
  transition: margin-left ${(props) => props.$animationDuration}ms linear;
  width: 100vw;
  z-index: 1031;
`;

export const StyledBar = styled.div`
  box-shadow:
    0 0 10px #423fcc,
    0 0 5px #423fcc;
  display: block;
  opacity: 1;
  position: absolute;
  right: 0;
  transform: rotate(3deg) translate(0px, -4px);
  width: 100;
  height: 100%;
`;
