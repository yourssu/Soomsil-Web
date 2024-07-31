import Logo from '@/assets/soomsil_logo.svg';
import { MyMenuList } from '@/home/components/MyMenuList/MyMenuList';
import { UserInformationCard } from '@/home/components/UserInformationCard/UserInformationCard';

import {
  StyledContainer,
  StyledHeader,
  StyledInnerContainer,
  StyledSoomsilLogo,
  StyledLogoContainer,
} from './MyPage.style';

export const Mypage = () => {
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
