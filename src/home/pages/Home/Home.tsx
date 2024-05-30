import { useRecoilValue } from 'recoil';

import { RealTimeKeyword } from '@/components/RealTimeKeyword/RealTimeKeyword.tsx';
import { DrawerRanking } from '@/home/components/DrawerRanking/DrawerRanking';
import { Header } from '@/home/components/Header/Header';
import { Nav } from '@/home/components/Nav/Nav';
import { Notification } from '@/home/components/Notification/Notification';
import { SocialNetworkService } from '@/home/components/SocialNetworkService/SocialNetworkService';
import { LogInState } from '@/home/recoil/LogInState';

import {
  StyledComponentContainer,
  StyledComponentInnerContainer,
  StyledContainer,
} from './Home.style';

export const Home = () => {
  const isLoggedIn = useRecoilValue(LogInState);

  return (
    <StyledContainer>
      <Nav isLoggedIn={isLoggedIn} />
      <Header />
      <StyledComponentContainer>
        <Notification />
        <StyledComponentInnerContainer>
          <DrawerRanking />
          <RealTimeKeyword variant="home" />
          <SocialNetworkService />
        </StyledComponentInnerContainer>
      </StyledComponentContainer>
    </StyledContainer>
  );
};
