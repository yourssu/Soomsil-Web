import { RankDrawerCard } from '@/home/components/RankDrawerCard/RankDrawerCard';
import { useGetDrawerRanking } from '@/home/hooks/useGetDrawerRanking';

import {
  StyledAllViewButton,
  StyledContainer,
  StyledRankCardContainer,
  StyledTitle,
  StyledTitleContainer,
} from './DrawerRanking.style';

export const DrawerRanking = () => {
  const { data } = useGetDrawerRanking();
  return (
    <StyledContainer>
      <StyledTitleContainer>
        <StyledTitle>금주의 서랍장 랭킹</StyledTitle>
        <StyledAllViewButton to="/drawer">전체보기</StyledAllViewButton>
      </StyledTitleContainer>
      <StyledRankCardContainer>
        {data?.productList
          .slice(0, 3)
          .map((drawerItem) => (
            <RankDrawerCard
              key={drawerItem.productNo}
              link={`/drawer/services/${drawerItem.productNo}`}
              smallImgSrc={drawerItem.mainImage}
              title={drawerItem.productTitle}
              body={drawerItem.productSubTitle}
              bookmarkCount={drawerItem.count}
              isBookmarked={drawerItem.isBookmarked}
            />
          ))}
      </StyledRankCardContainer>
    </StyledContainer>
  );
};
