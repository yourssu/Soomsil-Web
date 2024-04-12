import { ContainerProps } from './Container.type';
import { StyledContainer } from './Containter.style';

export const Container = ({ animationDuration, children, isFinished }: ContainerProps) => {
  return (
    <StyledContainer $animationDuration={animationDuration} $isFinished={isFinished}>
      {children}
    </StyledContainer>
  );
};
