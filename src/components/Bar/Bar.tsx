import { StyledBarBackground, StyledBar } from './Bar.style';

export const Bar = ({
  animationDuration,
  progress,
}: {
  animationDuration: number;
  progress: number;
}) => {
  return (
    <StyledBarBackground $progress={progress} $animationDuration={animationDuration}>
      <StyledBar />
    </StyledBarBackground>
  );
};
