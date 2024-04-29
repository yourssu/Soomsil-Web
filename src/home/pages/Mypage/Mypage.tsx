import { useLocation } from 'react-router-dom';

import Logo from '@/assets/soomsil_v2_logo.svg';
import { MyMenuList } from '@/home/components/MyMenuList/MyMenuList';
import { UserInformationCard } from '@/home/components/UserInformationCard/UserInformationCard';

import { ChangePassword } from '../ChangePassword/ChangePassword';

import {
  StyledContainer,
  StyledHeader,
  StyledInnerContainer,
  StyledSoomsilLogo,
  StyledLogoContainer,
} from './MyPage.style';

export const Mypage = () => {
  const location = useLocation();

  if (location.pathname === '/mypage/changePassword') {
    return <ChangePassword />;
  }

  return (
    <StyledContainer>
      <StyledHeader />
      <StyledInnerContainer>
        <StyledLogoContainer to="/">
          <StyledSoomsilLogo src={Logo} alt="soomsil" />
        </StyledLogoContainer>
        <UserInformationCard />
        <MyMenuList />
      </StyledInnerContainer>
    </StyledContainer>
  );
};
