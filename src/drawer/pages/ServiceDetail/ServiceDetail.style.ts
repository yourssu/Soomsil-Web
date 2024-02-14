import styled from 'styled-components';

export const StyledServiceDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

interface StyledBackgroundImageContainerProps {
  $backgroundImage: string;
}

export const StyledBackgroundImageContainer = styled.div<StyledBackgroundImageContainerProps>`
  display: flex;
  width: 100%;
  height: 40vh;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.$backgroundImage});
  filter: brightness(40%);
`;
