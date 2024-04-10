import Logo from '@/assets/soomsil_v2_logo.svg';

import {
  StyledSignupFrame,
  StyledSignupFrameContentContainer,
  StyledSignupFrameLogo,
} from './SignupFrame.style';

interface SignupFrameProps {
  children: React.ReactNode;
}

export const SignupFrame = ({ children }: SignupFrameProps) => {
  return (
    <StyledSignupFrame>
      <StyledSignupFrameLogo src={Logo} />
      <StyledSignupFrameContentContainer>{children}</StyledSignupFrameContentContainer>
    </StyledSignupFrame>
  );
};
