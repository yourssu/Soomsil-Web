import Logo from '@/assets/soomsil_logo.svg';

import {
  StyledChangePasswordFrame,
  StyledContainer,
  StyledLink,
  StyledLogo,
  StyledHiddenLogo,
  StyledHiddenDiv,
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
      <StyledHiddenDiv>
        <StyledHiddenLogo />
      </StyledHiddenDiv>
    </StyledChangePasswordFrame>
  );
};
