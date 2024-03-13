import Lottie from 'react-lottie';

import AnimationData from '@/assets/loading.json';

import { StyledContainer } from './Loading.style';

export const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AnimationData,
  };

  return (
    <StyledContainer>
      <Lottie options={defaultOptions} width={64} />
    </StyledContainer>
  );
};
