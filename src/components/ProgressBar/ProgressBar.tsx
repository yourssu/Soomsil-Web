import { useNProgress } from '@tanem/react-nprogress';

import { Bar } from '@/components/Bar/Bar';
import { Container } from '@/components/Container/Container';

import { ProgressBarProps } from './ProgressBar.type';

export const ProgressBar = ({
  animationDuration,
  incrementDuration,
  isAnimating,
  minimum,
}: ProgressBarProps) => {
  const { isFinished, progress } = useNProgress({
    animationDuration,
    incrementDuration,
    isAnimating,
    minimum,
  });

  return (
    <Container animationDuration={animationDuration} isFinished={isFinished}>
      <Bar animationDuration={animationDuration} progress={progress} />
    </Container>
  );
};
