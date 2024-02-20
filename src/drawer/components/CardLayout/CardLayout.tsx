import { BigDrawerCard } from '../DrawerCard/BigDrawerCard';
import { UserDrawerCard } from '../DrawerCard/UserDrawerCard/UserDrawerCard';
import { EmptyScreen } from '../EmptyScreen/EmptyScreen';

import { StyledCardLayoutContainer } from './CardLayout.style';

interface CardLayoutProps {
  isDataExist: boolean;
  type: 'SEARCH' | 'STAR' | 'MYDRAWER';
}

const NOT_FOUND_TEXT: Record<CardLayoutProps['type'], { boldText: string; subText: string }> = {
  SEARCH: {
    boldText: '해당 검색어에 대한 검색결과가 없습니다.',
    subText: '더 간단한 단어로 검색하거나 직접 서비스를 등록해보세요.',
  },
  STAR: {
    boldText: '즐겨찾기한 서비스가 없습니다.',
    subText: '내 취향의 서비스를 추가해보세요.',
  },
  MYDRAWER: {
    boldText: '내가 등록한 서비스가 없습니다.',
    subText: '새로운 서비스를 등록해보세요.',
  },
};

export const CardLayout = ({ isDataExist, type }: CardLayoutProps) => {
  const { boldText, subText } = NOT_FOUND_TEXT[type];

  return isDataExist ? (
    <StyledCardLayoutContainer>
      {/* 추후 card id로 map key index 수정 필요 */}
      {Array.from({ length: 9 }).map((_, index) =>
        type === 'MYDRAWER' ? (
          <UserDrawerCard
            key={index}
            link={''}
            title={'service'}
            body={'service introduction'}
            bookmarkCount={999}
            isBookmarked={true}
          />
        ) : (
          <BigDrawerCard
            key={index}
            link={''}
            title={'service'}
            body={'service introduction'}
            bookmarkCount={999}
            isBookmarked={true}
          />
        )
      )}
    </StyledCardLayoutContainer>
  ) : (
    <EmptyScreen boldText={boldText} subText={subText} type={type} />
  );
};
