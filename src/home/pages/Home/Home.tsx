import { RealTimeKeyword } from '@/components/RealTimeKeyword/RealTimeKeyword.tsx';
import { DrawerRanking } from '@/home/components/DrawerRanking/DrawerRanking';
import { Header } from '@/home/components/Header/Header';
import { Nav } from '@/home/components/Nav/Nav';
import { Notification } from '@/home/components/Notification/Notification';
import { SocialNetworkService } from '@/home/components/SocialNetworkService/SocialNetworkService';

import {
  StyledComponentContainer,
  StyledComponentInnerContainer,
  StyledContainer,
} from './Home.style';

export const Home = () => {
  return (
    <StyledContainer>
      <Nav />
      <Header />
      <StyledComponentContainer>
        <Notification />
        <StyledComponentInnerContainer>
          <SocialNetworkService />
        </StyledComponentInnerContainer>
        <StyledComponentInnerContainer>
          <DrawerRanking />
          <RealTimeKeyword variant="home" />
        </StyledComponentInnerContainer>
      </StyledComponentContainer>
    </StyledContainer>
  );
};
