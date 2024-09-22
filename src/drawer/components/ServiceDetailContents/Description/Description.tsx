import { IcStarFilled } from '@yourssu/design-system-react';

import { Carousel } from '@/drawer/components/ServiceDetailContents/Carousel/Carousel';
import { ProductDetailResult } from '@/drawer/types/product.type';

import {
  StyledDescription,
  StyledDescriptionPart,
  StyledDescriptionSection,
  StyledSubtitle,
} from './Description.style';

export const Description = ({ product }: { product: ProductDetailResult }) => {
  return (
    <StyledDescriptionSection>
      <Carousel introductionImage={product.introductionImage} />
      <StyledDescriptionPart>
        <StyledSubtitle>{`즐겨찾기 수`}</StyledSubtitle>
        <StyledDescription>
          {product.count}+
          <IcStarFilled size={'15px'} color={'#FDD655'} />
        </StyledDescription>
      </StyledDescriptionPart>

      <StyledDescriptionPart>
        <StyledSubtitle>{`서비스 소개`}</StyledSubtitle>
        <StyledDescription>{product.productContent}</StyledDescription>
      </StyledDescriptionPart>

      <StyledDescriptionPart>
        <StyledSubtitle>{`저작권`}</StyledSubtitle>
        <StyledDescription>{product.providerName}</StyledDescription>
      </StyledDescriptionPart>
    </StyledDescriptionSection>
  );
};
