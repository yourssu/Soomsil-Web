import { useCallback, useEffect, useRef } from 'react';

import { useSearchParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { CardLayout } from '@/drawer/components/CardLayout/CardLayout';
import { CategoryDropdownMenu } from '@/drawer/components/Category/CategoryDropdownMenu/CategoryDropdownMenu';
import { RankingCategory } from '@/drawer/components/Category/RankingCategory';
import { EmptyScreen } from '@/drawer/components/EmptyScreen/EmptyScreen';
import { SMALL_DESKTOP_MEDIA_QUERY } from '@/drawer/constants/mobileview.constant';
import { useGetSearchData } from '@/drawer/hooks/useGetSearchData';
import { CategoryState } from '@/drawer/recoil/CategoryState';
import { useMediaQuery } from '@/hooks/useMediaQuery';

import {
  StyledCardContainer,
  StyledContainer,
  StyledEmptyContainer,
  StyledRankingContainer,
} from './DrawerSearch.style';

export const DrawerSearch = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const [selectedCategory, setSelectedCategory] = useRecoilState(CategoryState);

  const {
    data: searchResults,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGetSearchData({ keyword, category: selectedCategory });

  useEffect(() => {
    setSelectedCategory('');
  }, []);

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

  const allProducts = searchResults ? searchResults.pages.flat() : [];

  const isSmallDesktop = useMediaQuery(SMALL_DESKTOP_MEDIA_QUERY);

  return (
    <StyledContainer>
      {!isSmallDesktop && <RankingCategory />}
      <StyledRankingContainer $isSmallDesktop={isSmallDesktop}>
        {isSmallDesktop && <CategoryDropdownMenu />}
        {allProducts.length === 0 ? (
          <StyledEmptyContainer>
            <EmptyScreen type={'SEARCH'} />
          </StyledEmptyContainer>
        ) : (
          <StyledCardContainer>
            <CardLayout data={allProducts} type={'SEARCH'} />
          </StyledCardContainer>
        )}
        {hasNextPage && <div ref={lastElementRef} />}
      </StyledRankingContainer>
    </StyledContainer>
  );
};
