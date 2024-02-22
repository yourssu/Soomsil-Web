import { BigDrawerCard } from '../DrawerCard/BigDrawerCard';
import { UserDrawerCard } from '../DrawerCard/UserDrawerCard/UserDrawerCard';

import { StyledCardLayoutContainer } from './CardLayout.style';

interface CardLayoutProps {
  data: any[]; // ProductResult[] 타입으로 수정 필요
  type: 'SEARCH' | 'STAR' | 'MYDRAWER';
}

export const CardLayout = ({ data, type }: CardLayoutProps) => {
  return (
    <StyledCardLayoutContainer>
      {/* 추후 card id로 map key index 수정 필요 */}
      {data.map((_, index) =>
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
  );
};
