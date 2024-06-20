import Logo from '@/assets/soomsil_logo.svg';
import { Link } from 'react-router-dom';
import { StyledContainer, StyledLogo, StyledWrapper } from './ResetPasswordFrame.style';

interface ResetPasswordFrameProps {
  children: React.ReactNode;
}

export const ResetPasswordFrame = ({ children }: ResetPasswordFrameProps) => {
  return (
    <StyledWrapper>
      <Link to="/">
        <StyledLogo src={Logo} alt="soomsil" />
      </Link>
      <StyledContainer>{children}</StyledContainer>
    </StyledWrapper>
  );
};
