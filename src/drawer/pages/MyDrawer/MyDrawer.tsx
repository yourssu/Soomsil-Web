import { useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import { Spacing } from '@/components/Spacing/Spacing';
import { Button } from '@/drawer/components/Button/Button';
import { CardLayout } from '@/drawer/components/CardLayout/CardLayout';
import { EmptyScreen } from '@/drawer/components/EmptyScreen/EmptyScreen';
import { NOT_FOUND_TEXT } from '@/drawer/constants/empty.constant';
import { TAB_DESCRIPTION } from '@/drawer/constants/mydrawer.constant';
import { useGetBookmarked } from '@/drawer/hooks/useGetBookMarked';
import { useGetMyRegistered } from '@/drawer/hooks/useGetMyRegistered';

import { StyledContainer, StyledTabWrapper, StyledDescription } from './MyDrawer.style';

export type TabType = 'STAR' | 'MYDRAWER';

export const MyDrawer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: bookmarkedData } = useGetBookmarked({ responseType: 'WEB', page: 0 });
  const { data: myProductData } = useGetMyRegistered({ responseType: 'WEB', page: 0 });
  const initialTab = searchParams.get('tab');

  const [currentTab, setCurrentTab] = useState<TabType>(
    isTabType(initialTab) ? initialTab : 'STAR'
  );

  const drawerData = currentTab === 'STAR' ? bookmarkedData : myProductData;

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
      {drawerData && drawerData.length > 0 ? (
        <>
          <StyledDescription>{TAB_DESCRIPTION[currentTab]}</StyledDescription>
          <CardLayout data={drawerData} type={currentTab} />
        </>
      ) : (
        <EmptyScreen {...NOT_FOUND_TEXT[currentTab]} type={currentTab} />
      )}
    </StyledContainer>
  );
};
