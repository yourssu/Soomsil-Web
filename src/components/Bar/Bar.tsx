import React from 'react';

import { StyeldBarBackground, StyledBar } from './Bar.style';

const Bar: React.FC<{ animationDuration: number; progress: number }> = ({
  progress,
  animationDuration,
}) => (
  <StyeldBarBackground $progress={progress} $animationDuration={animationDuration}>
    <StyledBar />
  </StyeldBarBackground>
);

export default Bar;
