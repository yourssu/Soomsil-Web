import { useState, useCallback, useRef } from 'react';

import { useSearchParams } from 'react-router-dom';

import { Spacing } from '@/components/Spacing/Spacing';
import { Button } from '@/drawer/components/Button/Button';
import { CardLayout } from '@/drawer/components/CardLayout/CardLayout';
import { EmptyScreen } from '@/drawer/components/EmptyScreen/EmptyScreen';
import { TAB_DESCRIPTION } from '@/drawer/constants/mydrawer.constant';
import { useGetBookmarked } from '@/drawer/hooks/useGetBookMarked';
import { useGetMyRegistered } from '@/drawer/hooks/useGetMyRegistered';

import { StyledContainer, StyledTabWrapper, StyledDescription } from './MyDrawer.style';

export type TabType = 'STAR' | 'MYDRAWER';

export const MyDrawer = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    data: bookmarkedData,
    fetchNextPage: fetchNextBookmarkedPage,
    hasNextPage: hasNextBookmarkedPage,
    isLoading: isLoadingBookmarked,
  } = useGetBookmarked({ responseType: 'WEB' });

  const {
    data: myProductData,
    fetchNextPage: fetchNextMyProductPage,
    hasNextPage: hasNextMyProductPage,
    isLoading: isLoadingMyProduct,
  } = useGetMyRegistered({ responseType: 'WEB' });

  const initialTab = searchParams.get('tab');

  const [currentTab, setCurrentTab] = useState<TabType>(
    isTabType(initialTab) ? initialTab : 'STAR'
  );

  const drawerData = currentTab === 'STAR' ? bookmarkedData : myProductData;
  const fetchNextPage = currentTab === 'STAR' ? fetchNextBookmarkedPage : fetchNextMyProductPage;
  const hasNextPage = currentTab === 'STAR' ? hasNextBookmarkedPage : hasNextMyProductPage;
  const isLoading = currentTab === 'STAR' ? isLoadingBookmarked : isLoadingMyProduct;

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
    [isLoading, hasNextPage, fetchNextPage]
  );

  function isTabType(tab: string | null): tab is TabType {
    return tab === 'STAR' || tab === 'MYDRAWER';
  }

  const handleClickTab = (clickedTab: TabType) => {
    setCurrentTab(clickedTab);
    setSearchParams({ tab: clickedTab });
  };

  return (
    <StyledContainer>
      <StyledTabWrapper>
        <Button
          text={'Stars'}
          isFilled={currentTab === 'STAR'}
          onClick={() => {
            handleClickTab('STAR');
          }}
        />
        <Spacing direction={'horizontal'} size={16} />
        <Button
          text={'My Products'}
          isFilled={currentTab === 'MYDRAWER'}
          onClick={() => {
            handleClickTab('MYDRAWER');
          }}
        />
      </StyledTabWrapper>
      <Spacing direction={'vertical'} size={14} />
      {drawerData.pages[0].length === 0 ? (
        <EmptyScreen type={currentTab} />
      ) : (
        <>
          <StyledDescription>{TAB_DESCRIPTION[currentTab]}</StyledDescription>
          <CardLayout data={drawerData.pages.flatMap((page) => page)} type={currentTab} />
          <div ref={lastElementRef} />
        </>
      )}
    </StyledContainer>
  );
};
