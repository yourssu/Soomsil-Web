import { useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import Spacing from '@/components/Spacing/Spacing';
import { Button } from '@/drawer/components/Button/Button';
import { CardLayout } from '@/drawer/components/CardLayout/CardLayout';
import { EmptyScreen } from '@/drawer/components/EmptyScreen/EmptyScreen';
import { NOT_FOUND_TEXT } from '@/drawer/constants/empty.constant';
import { TAB_DESCRIPTION } from '@/drawer/constants/mydrawer.constant';

import { StyledContainer, StyledTabWrapper, StyledDescription } from './MyDrawer.style';

const Dummy = Array.from({ length: 12 }).map((_, index) => index);

export type TabType = 'STAR' | 'MYDRAWER';

export const MyDrawer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get('tab');

  const [currentTab, setCurrentTab] = useState<TabType>(
    isTabType(initialTab) ? initialTab : 'STAR'
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
      {Dummy ? (
        <>
          <StyledDescription>{TAB_DESCRIPTION[currentTab]}</StyledDescription>
          <CardLayout data={Dummy} type={currentTab} />
        </>
      ) : (
        <EmptyScreen {...NOT_FOUND_TEXT[currentTab]} type={currentTab} />
      )}
    </StyledContainer>
  );
};
