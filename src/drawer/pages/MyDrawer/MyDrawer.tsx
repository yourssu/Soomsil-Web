import { useState } from 'react';

import { FlexContainer } from '@/components/FlexContainer/FlexContainer';
import Spacing from '@/components/Spacing/Spacing';

import { Button } from '../../components/Button/Button';

import { StyledContainer, StyledTitle } from './MyDrawer.style';

export const MyDrawer = () => {
  const [currentTab, setCurrentTab] = useState<boolean>(true);

  const handleClickTab = () => {
    setCurrentTab((prev) => !prev);
  };

  return (
    <StyledContainer>
      <FlexContainer>
        <Button text={'Stars'} isFilled={currentTab} onClick={handleClickTab} />
        <Spacing direction={'horizontal'} size={16} />
        <Button text={'My Products'} isFilled={!currentTab} onClick={handleClickTab} />
      </FlexContainer>
      <Spacing direction={'vertical'} size={24} />
      <StyledTitle>
        {currentTab ? '내 취향의 서비스를 확인해보세요.' : '내가 등록한 서비스를 관리해보세요.'}
      </StyledTitle>
    </StyledContainer>
  );
};
