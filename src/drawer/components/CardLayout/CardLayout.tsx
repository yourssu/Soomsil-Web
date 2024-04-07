import { Product } from '@/drawer/types/ProductList.type';

import { BigDrawerCard } from '../DrawerCard/BigDrawerCard';
import { UserDrawerCard } from '../DrawerCard/UserDrawerCard/UserDrawerCard';

import { StyledCardLayoutContainer } from './CardLayout.style';

interface CardLayoutProps {
  data: Product[];
  type: 'SEARCH' | 'STAR' | 'MYDRAWER';
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
            bigImgSrc={product.introductionImage[0]}
            smallImgSrc={product.mainImage}
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
