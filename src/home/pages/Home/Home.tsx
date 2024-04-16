import { useEffect, useState } from 'react';

import { isPast } from 'date-fns';
import { useRecoilValue } from 'recoil';

import { DrawerRanking } from '@/home/components/DrawerRanking/DrawerRanking';
import { Header } from '@/home/components/Header/Header';
import { Nav } from '@/home/components/Nav/Nav';
import { Notification } from '@/home/components/Notification/Notification';
import { SearchKeyword } from '@/home/components/SearchKeyword/SearchKeyword';
import { SocialNetworkService } from '@/home/components/SocialNetworkService/SocialNetworkService';
import { useGetUserData } from '@/home/hooks/useGetUserData';
import { UserState } from '@/home/recoil/UserState';
import { api } from '@/service/TokenService';

import {
  StyledComponentContainer,
  StyledComponentInnerContainer,
  StyledContainer,
} from './Home.style';

export const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const accessToken = api.getAccessToken();
  const accessExpiredIn = sessionStorage.getItem('accessExpiredIn');
  const currentUser = useRecoilValue(UserState);
  const { refetch } = useGetUserData();

  useEffect(() => {
    if (accessExpiredIn) {
      if (accessToken == null || isPast(new Date(accessExpiredIn))) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
        if (!currentUser) refetch();
      }
    }
  }, [accessToken, accessExpiredIn]);

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
