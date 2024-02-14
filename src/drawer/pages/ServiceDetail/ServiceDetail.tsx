import { useParams } from 'react-router-dom';

import backgroundImage from '@/assets/service_detail_background.png';

import {
  StyledBackgroundImageContainer,
  StyledCategoryContainer,
  StyledCategoryHintText,
  StyledCategoryText,
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
      </StyledBackgroundImageContainer>
    </StyledServiceDetailContainer>
  );
};
