import { useRecoilValue } from 'recoil';
import { useTheme } from 'styled-components';

import { ProfileIconButton } from '@/components/ProfileIconButton/ProfileIconButton';
import { LogInState } from '@/home/recoil/LogInState';

import {
  StyledColDivider,
  StyledContainer,
  StyledNonLoginContainer,
  StyledNonLoginText,
} from './Nav.style';

export const Nav = () => {
  const isLoggedIn = useRecoilValue(LogInState);
  const theme = useTheme();

  // Todo: 로그아웃 기능 추가 (ProfileDropdownMenu)
  // const handleLogout = () => {
  //   sessionStorage.removeItem('accessExpiredIn');
  //   api.logout();
  //   return;
  // };

  return (
    <StyledContainer>
      {isLoggedIn ? (
        <ProfileIconButton color={theme.baseColor.logoViolet} size="2.5rem" />
      ) : (
        <StyledNonLoginContainer>
          <StyledNonLoginText to="/login">로그인</StyledNonLoginText>
          <StyledColDivider>|</StyledColDivider>
          <StyledNonLoginText to="/signup">회원가입</StyledNonLoginText>
        </StyledNonLoginContainer>
      )}
    </StyledContainer>
  );
};
