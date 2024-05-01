import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  return (
    <StyledSignupFrame>
      <StyledSignupFrameLogo src={Logo} onClick={() => navigate('/')} />
      <StyledSignupFrameContentContainer>{children}</StyledSignupFrameContentContainer>
    </StyledSignupFrame>
  );
};
