import Logo from '@/assets/soomsil_v2_logo.svg';

import {
  StyledChangePasswordFrame,
  StyledLogo,
  StyledContainer,
  StyledLink,
} from './ChangePasswordFrame.style';

interface ChangePasswordFrameProps {
  children: React.ReactNode;
}

export const ChangePasswordFrame = ({ children }: ChangePasswordFrameProps) => {
  return (
    <StyledChangePasswordFrame>
      <StyledLink to="/">
        <StyledLogo src={Logo} alt="soomsil" />
      </StyledLink>
      <StyledContainer>{children}</StyledContainer>
    </StyledChangePasswordFrame>
  );
};
