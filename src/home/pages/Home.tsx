import { DrawerRanking } from '../components/DrawerRanking/DrawerRanking';
import { SearchKeyword } from '../components/SearchKeyword/SearchKeyword';
import SocialNetworkService from '../components/SocialNetworkService/SocialNetworkService';

import { StyledContainer } from './Home.style';

export const Home = () => {
  return (
    <>
      <a>Home</a>
      <button>홈 버튼</button>
      <StyledContainer>
        <DrawerRanking />
        <SearchKeyword />
        <SocialNetworkService />
      </StyledContainer>
    </>
  );
};
