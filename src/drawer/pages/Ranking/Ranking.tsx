import drawerMainImage1 from '@/drawer/assets/drawer_main_image1.png';
import drawerMainImage2 from '@/drawer/assets/drawer_main_image2.png';
import { Category } from '@/drawer/components/Category/Category';
import { BigDrawerCard } from '@/drawer/components/DrawerCard/BigDrawerCard';
import { GrayButton } from '@/drawer/components/GrayButton/GrayButton';

import {
  StyledBetweenContainer,
  StyledCardContainer,
  StyledContainer,
  StyledDescription,
  StyledImage,
  StyledRankingContainer,
  StyledTextContainer,
  StyledTitle,
} from './Ranking.style';

export const Ranking = () => {
  return (
    <StyledContainer>
      <Category isAll={true} />
      <StyledRankingContainer>
        <div>
          <StyledBetweenContainer>
            <StyledTextContainer>
              <StyledTitle>Star Ranking</StyledTitle>
              <StyledDescription>service service service</StyledDescription>
            </StyledTextContainer>
            <GrayButton
              text={'더보기'}
              onClick={() => {
                // TODO: Navigation
              }}
            />
          </StyledBetweenContainer>
          <StyledCardContainer>
            {Array.from({ length: 3 }).map((_, index) => (
              <BigDrawerCard
                key={index}
                link={''}
                title={'service'}
                body={'service introduction'}
                bookmarkCount={999}
                isBookmarked={true}
              />
            ))}
          </StyledCardContainer>
        </div>
        <StyledImage src={drawerMainImage1} alt="drawer main image1" />
        <StyledImage src={drawerMainImage2} alt="drawer main image2" />
        <div>
          <StyledBetweenContainer>
            <StyledTextContainer>
              <StyledTitle>New Releases</StyledTitle>
              <StyledDescription>service service service</StyledDescription>
            </StyledTextContainer>
            <GrayButton
              text={'더보기'}
              onClick={() => {
                // TODO: Navigation
              }}
            />
          </StyledBetweenContainer>
          <StyledCardContainer>
            {Array.from({ length: 3 }).map((_, index) => (
              <BigDrawerCard
                key={index}
                link={''}
                title={'service'}
                body={'service introduction'}
                bookmarkCount={999}
                isBookmarked={true}
              />
            ))}
          </StyledCardContainer>
        </div>
      </StyledRankingContainer>
    </StyledContainer>
  );
};
