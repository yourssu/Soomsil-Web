import DrawerRanking from '../components/DrawerRanking/DrawerRanking';
import SearchKeyword from '../components/SearchKeyword/SearchKeyword';
import SocialNetworkService from '../components/SocialNetworkService/SocialNetworkService';

import { StyledContainer } from './Home.style';

const Dummy = {
  ranking: [
    { link: '', title: 'title', body: 'description', bookmarkCount: 999, isBookmarked: false },
    { link: '', title: 'title1', body: 'description', bookmarkCount: 999, isBookmarked: true },
    { link: '', title: 'title2', body: 'description', bookmarkCount: 999, isBookmarked: false },
  ],
  keyword: [
    '숭실대학교',
    '유어슈',
    '복학신청',
    '글로벌미디어학부',
    '뿌슝이',
    '로지',
    '에린',
    '혀니',
    '엘리아',
    '복학하기싫어요',
  ],
  date: '2024.01.01.12:00',
};

export const Home = () => {
  return (
    <>
      <a>Home</a>
      <button>홈 버튼</button>
      <StyledContainer>
        <DrawerRanking drawerList={Dummy.ranking} />
        <SearchKeyword keywords={Dummy.keyword} date={Dummy.date} />
        <SocialNetworkService />
      </StyledContainer>
    </>
  );
};
