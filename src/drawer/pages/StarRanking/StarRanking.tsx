import { useRecoilValue } from 'recoil';

import { CategoryDropdownMenu } from '@/drawer/components/Category/CategoryDropdownMenu/CategoryDropdownMenu';
import { RankingCategory } from '@/drawer/components/Category/RankingCategory';
import { BigDrawerCard } from '@/drawer/components/DrawerCard/BigDrawerCard';
import { SMALL_DESKTOP_MEDIA_QUERY } from '@/drawer/constants/mobileview.constant';
import { useGetStarRank } from '@/drawer/hooks/useGetStarRank';
import { CategoryState } from '@/drawer/recoil/CategoryState';
import { useMediaQuery } from '@/hooks/useMediaQuery';

import {
  StyledBetweenContainer,
  StyledCardContainer,
  StyledContainer,
  StyledDescription,
  StyledRankingContainer,
  StyledTextContainer,
  StyledTitle,
} from '../Ranking/Ranking.style';

export const StarRanking = () => {
  const selectedCategory = useRecoilValue(CategoryState);
  const { data: rankings } = useGetStarRank({
    responseType: 'WEB',
    category: selectedCategory,
    page: 0,
  });
  const isSmallDesktop = useMediaQuery(SMALL_DESKTOP_MEDIA_QUERY);

  return (
    <StyledContainer>
      {!isSmallDesktop && <RankingCategory />}
      <StyledRankingContainer $isSmallDesktop={isSmallDesktop}>
        <div>
          {isSmallDesktop && <CategoryDropdownMenu />}
          <StyledBetweenContainer>
            <StyledTextContainer>
              <StyledTitle>Star Ranking</StyledTitle>
              <StyledDescription>실시간 랭킹을 확인해보세요.</StyledDescription>
            </StyledTextContainer>
          </StyledBetweenContainer>
          <StyledCardContainer>
            {rankings &&
              rankings.map((product) => (
                <BigDrawerCard
                  key={product.productNo}
                  link={`/drawer/services/${product.productNo}`}
                  title={product.productTitle}
                  body={product.productSubTitle}
                  bookmarkCount={product.count}
                  isBookmarked={product.isBookmarked}
                  bigImgSrc={product.introductionImage[0]}
                  smallImgSrc={product.mainImage}
                />
              ))}
          </StyledCardContainer>
        </div>
      </StyledRankingContainer>
    </StyledContainer>
  );
};
