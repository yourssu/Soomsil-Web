import Logo from '@/assets/soomsil_v2_logo.svg';

interface ChangePasswordFrameProps {
  children: React.ReactNode;
}

import {
  StyledChangePasswordFrame,
  StyledLogo,
  StyledContainer,
} from './ChangePasswordFrame.style';

export const ChangePasswordFrame = ({ children }: ChangePasswordFrameProps) => {
  return (
    <StyledChangePasswordFrame>
      <StyledLogo src={Logo} alt="soomsil" />
      <StyledContainer>{children}</StyledContainer>
    </StyledChangePasswordFrame>
  );
};
