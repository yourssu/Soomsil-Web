import { useNavigate } from 'react-router-dom';

import Logo from '@/assets/soomsil_v2_logo.svg';
import { MyMenuList } from '@/home/components/MyMenuList/MyMenuList';
import { UserInformationCard } from '@/home/components/UserInformationCard/UserInformationCard';

import {
  StyledContainer,
  StyledHeader,
  StyledInnerContainer,
  StyledSoomsilLogo,
} from './MyPage.style';

export const Mypage = () => {
  const navigate = useNavigate();

  return (
    <StyledContainer>
      <StyledHeader />
      <StyledInnerContainer>
        <StyledSoomsilLogo src={Logo} alt="soomsil" />
        <UserInformationCard />
        <MyMenuList />
      </StyledInnerContainer>
    </StyledContainer>
  );
};
