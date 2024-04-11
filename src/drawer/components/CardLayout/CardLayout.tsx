import { ProductResult } from '@/drawer/types/product.type';

import { BigDrawerCard } from '../DrawerCard/BigDrawerCard';
import { UserDrawerCard } from '../DrawerCard/UserDrawerCard/UserDrawerCard';

import { StyledCardLayoutContainer } from './CardLayout.style';

interface CardLayoutProps {
  data: ProductResult[];
  type: 'SEARCH' | 'STAR' | 'MYDRAWER' | 'PROVIDER';
}

export const CardLayout = ({ data, type }: CardLayoutProps) => {
  return (
    <StyledCardLayoutContainer>
      {data.map((product) =>
        type === 'MYDRAWER' ? (
          <UserDrawerCard
            key={product.productNo}
            link={`/drawer/services/${product.productNo}`}
            title={product.productTitle}
            body={product.productSubTitle}
            bookmarkCount={product.count}
            isBookmarked={product.isBookmarked}
          />
        ) : (
          <BigDrawerCard
            key={product.productNo}
            link={`/drawer/services/${product.productNo}`}
            title={product.productTitle}
            body={product.productSubTitle}
            bookmarkCount={product.count}
            isBookmarked={product.isBookmarked}
            bigImgSrc={product.introductionImage[0]}
            smallImgSrc={product.mainImage}
          />
        )
      )}
    </StyledCardLayoutContainer>
  );
};
