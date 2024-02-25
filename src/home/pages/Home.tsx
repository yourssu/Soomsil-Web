import { DrawerRanking } from '../components/DrawerRanking/DrawerRanking';
import { Notification } from '../components/Notification/Notification';
import { SearchKeyword } from '../components/SearchKeyword/SearchKeyword';
import SocialNetworkService from '../components/SocialNetworkService/SocialNetworkService';

import { StyledComponentContainer } from './Home.style';

export const Home = () => {
  return (
    <>
      <a>Home</a>
      <button>홈 버튼</button>
      <Notification />
      <StyledComponentContainer>
        <DrawerRanking />
        <SearchKeyword />
        <SocialNetworkService />
      </StyledComponentContainer>
    </>
  );
};
