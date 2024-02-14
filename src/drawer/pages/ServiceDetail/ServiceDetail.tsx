import { BoxButton } from '@yourssu/design-system-react';
import { useParams } from 'react-router-dom';

import backgroundImage from '@/assets/service_detail_background.png';

import {
  StyledBackgroundImageContainer,
  StyledCategoryContainer,
  StyledCategoryHintText,
  StyledCategoryText,
  StyledServiceActionContainer,
  StyledServiceDetailContainer,
  StyledServiceDeveloperText,
  StyledServiceInfoContainer,
  StyledServiceTitleText,
  StyledThumbnailImage,
} from './ServiceDetail.style';

export const ServiceDetail = () => {
  const { serviceId } = useParams();

  return (
    <StyledServiceDetailContainer>
      <StyledBackgroundImageContainer $backgroundImage={backgroundImage}>
        <StyledServiceTitleText>TITLE</StyledServiceTitleText>
        <StyledServiceDeveloperText>Developer</StyledServiceDeveloperText>
        <StyledServiceInfoContainer>
          <StyledThumbnailImage src={backgroundImage} />
          <StyledCategoryContainer>
            <StyledCategoryText>학교생활</StyledCategoryText>
            <StyledCategoryHintText>카테고리</StyledCategoryHintText>
          </StyledCategoryContainer>
        </StyledServiceInfoContainer>
        <StyledServiceActionContainer>
          // TODO: 버튼 사이즈 반응형
          <BoxButton size="medium" rounding={8} variant="filled" width="200px">
            DOWNLOAD
          </BoxButton>
          // TODO: 버튼 사이즈 반응형
          <BoxButton size="medium" rounding={8} variant="tinted" width="200px">
            Github
          </BoxButton>
        </StyledServiceActionContainer>
      </StyledBackgroundImageContainer>
    </StyledServiceDetailContainer>
  );
};
