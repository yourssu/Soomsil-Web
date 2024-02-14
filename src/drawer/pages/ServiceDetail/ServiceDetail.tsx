import { useParams } from 'react-router-dom';

import backgroundImage from '@/assets/service_detail_background.png';

import {
  StyledBackgroundImageContainer,
  StyledServiceDetailContainer,
} from './ServiceDetail.style';

export const ServiceDetail = () => {
  const { serviceId } = useParams();

  return (
    <StyledServiceDetailContainer>
      <StyledBackgroundImageContainer $backgroundImage={backgroundImage}>
        {serviceId}
      </StyledBackgroundImageContainer>
    </StyledServiceDetailContainer>
  );
};
