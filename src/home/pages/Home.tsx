import { DrawerRanking } from '../components/DrawerRanking/DrawerRanking';
import { SearchKeyword } from '../components/SearchKeyword/SearchKeyword';
import SocialNetworkService from '../components/SocialNetworkService/SocialNetworkService';

import { StyledContainer } from './Home.style';

export const Home = () => {
  return (
    <>
      <StyledContainer>
        <DrawerRanking />
        <SearchKeyword />
        <SocialNetworkService />
      </StyledContainer>
    </>
  );
};
