import { useCallback, useRef } from 'react';

import { useRecoilValue } from 'recoil';

import { CategoryDropdownMenu } from '@/drawer/components/Category/CategoryDropdownMenu/CategoryDropdownMenu';
import { RankingCategory } from '@/drawer/components/Category/RankingCategory';
import { BigDrawerCard } from '@/drawer/components/DrawerCard/BigDrawerCard';
import { EmptyScreen } from '@/drawer/components/EmptyScreen/EmptyScreen';
import { SMALL_DESKTOP_MEDIA_QUERY } from '@/drawer/constants/mobileview.constant';
import { useGetNewRelease } from '@/drawer/hooks/useGetNewRelease';
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

export const NewRelease = () => {
  const selectedCategory = useRecoilValue(CategoryState);
  const {
    data: newReleases,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGetNewRelease({
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
              <StyledTitle>New Releases</StyledTitle>
              <StyledDescription>새로 출시된 서비스를 확인해보세요.</StyledDescription>
            </StyledTextContainer>
          </StyledBetweenContainer>
          <StyledCardContainer>
            {newReleases &&
              newReleases.pages.flat().map((product, productIndex, flatArray) => {
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
          {newReleases.pages[0].length === 0 && <EmptyScreen type="CATEGORY" />}
        </div>
      </StyledRankingContainer>
    </StyledContainer>
  );
};
