import { useParams } from 'react-router-dom';

import { Description } from '@/drawer/components/ServiceDetailContents/Description/Description';
import { MoreProductSection } from '@/drawer/components/ServiceDetailContents/MoreProductSection/MoreProductSection';
import { ServiceAction } from '@/drawer/components/ServiceDetailContents/ServiceAction/ServiceAction';
import { CategoryObj } from '@/drawer/constants/category.constant';
import { useGetProductDetail } from '@/drawer/hooks/useGetProductDetail';

import {
  StyledBackgroundContainer,
  StyledCategoryContainer,
  StyledCategoryHintText,
  StyledCategoryText,
  StyledServiceDetailContainer,
  StyledServiceDeveloperText,
  StyledServiceInfoContainer,
  StyledServiceTitleText,
  StyledThumbnailImage,
  StyledLowerSection,
} from './ServiceDetail.style';

export const ServiceDetail = () => {
  const { serviceId } = useParams();
  const { data: product } = useGetProductDetail(Number(serviceId));

  return (
    <StyledServiceDetailContainer>
      <StyledBackgroundContainer>
        <StyledServiceTitleText>{product.productTitle}</StyledServiceTitleText>
        <StyledServiceDeveloperText>{product.providerName}</StyledServiceDeveloperText>
        <StyledServiceInfoContainer>
          <StyledThumbnailImage src={product.thumbnail} />
          <StyledCategoryContainer>
            <StyledCategoryText>{CategoryObj[product.category]}</StyledCategoryText>
            <StyledCategoryHintText>카테고리</StyledCategoryHintText>
          </StyledCategoryContainer>
        </StyledServiceInfoContainer>
        <ServiceAction product={product} />
      </StyledBackgroundContainer>
      <StyledLowerSection>
        <Description product={product} />
        <MoreProductSection providerId={product.providerId} />
      </StyledLowerSection>
    </StyledServiceDetailContainer>
  );
};
