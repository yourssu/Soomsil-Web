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
          <RealTimeKeyword
            containerPadding="1rem"
            containerWidth="32.5rem"
            containerHeight="auto"
            titleContainerPadding="0.3125rem 0.5rem"
            titleContainerMarginBottom="0.5rem"
            updateDateTypo="caption2"
            columnCount={2}
            keywordWidth="7.375rem"
            imageWidth="10.3125rem"
            imageHeight="6.875rem"
            imageTop="-1.125rem"
            imageRight="0.9375rem"
          />
          <SocialNetworkService />
        </StyledComponentInnerContainer>
      </StyledComponentContainer>
    </StyledContainer>
  );
};
