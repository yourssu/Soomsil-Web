import { IcStarFilled, IconContext } from '@yourssu/design-system-react';
import { useParams } from 'react-router-dom';

import backgroundImage from '@/assets/service_detail_background.png';
import { FlexContainer } from '@/components/FlexContainer/FlexContainer';
import { SmallDrawerCard } from '@/drawer/components/DrawerCard/SmallDrawerCard';
import { Spacing } from '@/home/components/Spacing/Spacing';

import {
  StyledBackgroundImageContainer,
  StyledDescription,
  StyledDescriptionPart,
  StyledDescriptionSection,
  StyledMoreProductSection,
  StyledProductImage,
  StyledCarousel,
  StyledServiceDetailContainer,
  StyledSubtitle,
} from './ServiceDetail.style';

export const ServiceDetail = () => {
  const { serviceId } = useParams();

  return (
    <StyledServiceDetailContainer>
      <StyledBackgroundImageContainer $backgroundImage={backgroundImage}>
        {serviceId}
      </StyledBackgroundImageContainer>
      <Spacing size="5rem" />
      <FlexContainer>
        <StyledDescriptionSection>
          <StyledCarousel>
            {Array.from({ length: 3 }).map(() => (
              <StyledProductImage src={backgroundImage} />
            ))}
          </StyledCarousel>
          <StyledDescriptionPart>
            <StyledSubtitle>{`추천`}</StyledSubtitle>
            <StyledDescription>
              {`999`}+
              <IconContext.Provider value={{ size: '15px', color: '#FDD655' }}>
                <IcStarFilled />
              </IconContext.Provider>
            </StyledDescription>
          </StyledDescriptionPart>

          <StyledDescriptionPart>
            <StyledSubtitle>{`서비스 소개`}</StyledSubtitle>
            <StyledDescription>{`service`}</StyledDescription>
          </StyledDescriptionPart>

          <StyledDescriptionPart>
            <StyledSubtitle>{`저작권`}</StyledSubtitle>
            <StyledDescription>{`Yourssu`}</StyledDescription>
          </StyledDescriptionPart>
        </StyledDescriptionSection>
        <StyledMoreProductSection>
          {`제작자`}의 서비스 더보기
          {Array.from({ length: 5 }).map(() => (
            <SmallDrawerCard
              link={``}
              title={`TITLE`}
              body={`제작자`}
              bookmarkCount={999}
              isBookmarked={true}
            />
          ))}
        </StyledMoreProductSection>
      </FlexContainer>

      <Spacing size="10rem" />
    </StyledServiceDetailContainer>
  );
};
