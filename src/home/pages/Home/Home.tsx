import { DrawerRanking } from '../../components/DrawerRanking/DrawerRanking';
import { Notification } from '../../components/Notification/Notification';
import { SearchKeyword } from '../../components/SearchKeyword/SearchKeyword';
import SocialNetworkService from '../../components/SocialNetworkService/SocialNetworkService';

import { StyledComponentContainer } from './Home.style';

export const Home = () => {
  return (
    <>
      <Notification />
      <StyledComponentContainer>
        <DrawerRanking />
        <SearchKeyword />
        <SocialNetworkService />
      </StyledComponentContainer>
    </>
  );
};
