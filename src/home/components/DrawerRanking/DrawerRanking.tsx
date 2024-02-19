import RankDrawerCard from '../RankDrawerCard/RankDrawerCard';

import {
  StyledAllViewButton,
  StyledContainer,
  StyledRankCardContainer,
  StyledTitle,
  StyledTitleContainer,
} from './DrawerRanking.style';

const Dummy = [
  { link: '', title: 'title', body: 'description', bookmarkCount: 999, isBookmarked: false },
  { link: '', title: 'title1', body: 'description', bookmarkCount: 999, isBookmarked: true },
  { link: '', title: 'title2', body: 'description', bookmarkCount: 999, isBookmarked: false },
];

const DrawerRanking = () => {
  return (
    <StyledContainer>
      <StyledTitleContainer>
        <StyledTitle>금주의 서랍장 랭킹</StyledTitle>
        <StyledAllViewButton to="/drawer">전체보기</StyledAllViewButton>
      </StyledTitleContainer>
      <StyledRankCardContainer>
        {Dummy.map((drawerItem) => (
          <RankDrawerCard
            key={drawerItem.title}
            link={drawerItem.link}
            title={drawerItem.title}
            body={drawerItem.body}
            bookmarkCount={drawerItem.bookmarkCount}
            isBookmarked={drawerItem.isBookmarked}
          />
        ))}
      </StyledRankCardContainer>
    </StyledContainer>
  );
};

export default DrawerRanking;
