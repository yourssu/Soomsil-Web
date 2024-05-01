import { DrawerRanking } from '@/home/components/DrawerRanking/DrawerRanking';
import { Header } from '@/home/components/Header/Header';
import { Nav } from '@/home/components/Nav/Nav';
import { Notification } from '@/home/components/Notification/Notification';
import { SearchKeyword } from '@/home/components/SearchKeyword/SearchKeyword';
import { SocialNetworkService } from '@/home/components/SocialNetworkService/SocialNetworkService';
import { useIsLoggedIn } from '@/hooks/useIsLoggedIn';

import {
  StyledComponentContainer,
  StyledComponentInnerContainer,
  StyledContainer,
} from './Home.style';

export const Home = () => {
  const isLoggedIn = useIsLoggedIn();

  return (
    <StyledContainer>
      <Nav isLoggedIn={isLoggedIn} />
      <Header />
      <StyledComponentContainer>
        <Notification />
        <StyledComponentInnerContainer>
          <DrawerRanking />
          <SearchKeyword />
          <SocialNetworkService />
        </StyledComponentInnerContainer>
      </StyledComponentContainer>
    </StyledContainer>
  );
};
