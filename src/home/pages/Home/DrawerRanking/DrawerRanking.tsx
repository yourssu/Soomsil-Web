import RankDrawerCard from '../RankDrawerCard/RankDrawerCard';
import { RankDrawerProps } from '../RankDrawerCard/RankDrawerCard.type';

import {
  StyledAllViewButton,
  StyledContainer,
  StyledRankCardContainer,
  StyledTitle,
  StyledTitleContainer,
} from './DrawerRanking.style';
interface DrawerRankingProps {
  drawerList: RankDrawerProps[];
}

const DrawerRanking = ({ drawerList }: DrawerRankingProps) => {
  return (
    <StyledContainer>
      <StyledTitleContainer>
        <StyledTitle>금주의 서랍장 랭킹</StyledTitle>
        <StyledAllViewButton to="/drawer">전체보기</StyledAllViewButton>
      </StyledTitleContainer>
      <StyledRankCardContainer>
        {drawerList.map((drawerItem) => (
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
