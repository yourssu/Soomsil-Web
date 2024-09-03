import IcRightArrow from '@/drawer/assets/ic_right_arrow.svg';
import { SmallDrawerCard } from '@/drawer/components/DrawerCard/SmallDrawerCard';
import { useGetProductByProvider } from '@/drawer/hooks/useGetProductByProvider';

import { StyledContainer, StyledLink, StyledMoreProductSection } from './MoreProductSection.style';

export const MoreProductSection = ({ providerId }: { providerId: string }) => {
  const { data } = useGetProductByProvider({ providerId });
  const { providerName, products } = data.pages[0];

  if (products.length === 0) return null;
  return (
    <StyledMoreProductSection>
      <StyledContainer>
        {providerName}의 서비스 더보기
        <StyledLink to={`/drawer/${providerId}`} title={'more-production-link'}>
          <img src={IcRightArrow} alt={'right-arrow-icon'} />
        </StyledLink>
      </StyledContainer>
      {products.slice(0, 5).map(({ productTitle, count, productNo, mainImage, isBookmarked }) => (
        <SmallDrawerCard
          key={productNo}
          link={`/drawer/services/${productNo}`}
          title={productTitle}
          body={providerName}
          bookmarkCount={count}
          isBookmarked={isBookmarked}
          smallImgSrc={mainImage}
        />
      ))}
    </StyledMoreProductSection>
  );
};
