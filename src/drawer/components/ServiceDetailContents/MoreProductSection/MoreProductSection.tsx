import { useNavigate } from 'react-router-dom';

import IcRightArrow from '@/drawer/assets/ic_right_arrow.svg';
import { SmallDrawerCard } from '@/drawer/components/DrawerCard/SmallDrawerCard';
import { useGetProductByProvider } from '@/drawer/hooks/useGetProductByProvider';

import {
  StyledArrowButton,
  StyledContainer,
  StyledMoreProductSection,
} from './MoreProductSection.style';

export const MoreProductSection = ({ providerId }: { providerId: string }) => {
  const {
    data: { providerName, products },
  } = useGetProductByProvider({ providerId });

  const navigate = useNavigate();

  if (products.length === 0) return null;
  return (
    <StyledMoreProductSection>
      <StyledContainer>
        {providerName}의 서비스 더보기
        <StyledArrowButton
          $backgroundImage={IcRightArrow}
          type="button"
          onClick={() => {
            navigate(`/drawer/${providerId}`);
          }}
        />
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
