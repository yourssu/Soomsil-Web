import { useCallback, useRef } from 'react';

import { useRecoilValue } from 'recoil';

import { CategoryDropdownMenu } from '@/drawer/components/Category/CategoryDropdownMenu/CategoryDropdownMenu';
import { RankingCategory } from '@/drawer/components/Category/RankingCategory';
import { BigDrawerCard } from '@/drawer/components/DrawerCard/BigDrawerCard';
import { EmptyScreen } from '@/drawer/components/EmptyScreen/EmptyScreen';
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

  const {
    data: rankings,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGetStarRank({
    responseType: 'WEB',
    category: selectedCategory,
  });

  const observer = useRef<IntersectionObserver>();

  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return;

      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasNextPage]
  );

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
              rankings.pages.flat().map((product, productIndex, flatArray) => {
                const isLastProduct = productIndex === flatArray.length - 1;
                return (
                  <div key={product.productNo}>
                    <BigDrawerCard
                      link={`/drawer/services/${product.productNo}`}
                      title={product.productTitle}
                      body={product.productSubTitle}
                      bookmarkCount={product.count}
                      isBookmarked={product.isBookmarked}
                      bigImgSrc={product.introductionImage[0]}
                      smallImgSrc={product.mainImage}
                    />
                    {isLastProduct && <div ref={lastElementRef} />}
                  </div>
                );
              })}
          </StyledCardContainer>
          {rankings.pages[0].length === 0 && <EmptyScreen type="CATEGORY" />}
        </div>
      </StyledRankingContainer>
    </StyledContainer>
  );
};
