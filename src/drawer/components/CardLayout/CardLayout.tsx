import { BoxButton } from '@yourssu/design-system-react';

import NotIllust from '@/drawer/assets/drawerNot.png';

import { BigDrawerCard } from '../DrawerCard/BigDrawerCard';

import {
  StyledCardLayoutContainer,
  StyledNotContainer,
  StyledNotImg,
  StyledNotTextBold,
  StyledNotTextContainer,
} from './CardLayout.style';

interface CardLayoutProps {
  isDataExist: boolean;
  type: 'search' | 'star' | 'mydrawer';
}

const notFoundText: Record<CardLayoutProps['type'], { boldText: string; subText: string }> = {
  search: {
    boldText: '해당 검색어에 대한 검색결과가 없습니다.',
    subText: '더 간단한 단어로 검색하거나 직접 서비스를 등록해보세요.',
  },
  star: {
    boldText: '즐겨찾기한 서비스가 없습니다.',
    subText: '내 취향의 서비스를 추가해보세요.',
  },
  mydrawer: {
    boldText: '내가 등록한 서비스가 없습니다.',
    subText: '새로운 서비스를 등록해보세요.',
  },
};

export const CardLayout = ({ isDataExist, type }: CardLayoutProps) => {
  const { boldText, subText } = notFoundText[type];

  return isDataExist ? (
    <StyledCardLayoutContainer>
      {/* 추후 card id로 map key index 수정 필요 */}
      {Array.from({ length: 9 }).map((_, index) => (
        <BigDrawerCard
          key={index}
          link={''}
          title={'service'}
          body={'service introduction'}
          bookmarkCount={999}
          isBookmarked={true}
        />
      ))}
    </StyledCardLayoutContainer>
  ) : (
    <StyledNotContainer>
      <StyledNotTextContainer>
        <StyledNotTextBold>{boldText}</StyledNotTextBold>
        <div>{subText}</div>
      </StyledNotTextContainer>
      <StyledNotImg src={NotIllust} />

      {type === 'search' || type === 'mydrawer' ? (
        <BoxButton size="small" variant="filled" rounding={4}>
          서비스 등록하기
        </BoxButton>
      ) : (
        <></>
      )}
    </StyledNotContainer>
  );
};
