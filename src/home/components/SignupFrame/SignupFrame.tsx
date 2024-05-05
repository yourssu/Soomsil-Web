import { Link } from 'react-router-dom';

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
      <Link to={'/'}>
        <StyledSignupFrameLogo src={Logo} />
      </Link>
      <StyledSignupFrameContentContainer>{children}</StyledSignupFrameContentContainer>
    </StyledSignupFrame>
  );
};
