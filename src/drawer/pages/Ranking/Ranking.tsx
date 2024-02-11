import { BigDrawerCard } from '@/drawer/components/DrawerCard/BigDrawerCard';
import { GrayButton } from '@/drawer/components/GrayButton/GrayButton';
import drawerMainImage1 from '@/drawer/assets/drawer_main_image1.png';
import drawerMainImage2 from '@/drawer/assets/drawer_main_image2.png';
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
import { Category } from '@/drawer/components/Category/Category';

export const Ranking = () => {
  return (
    <StyledContainer>
      <Category />
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
            {/* 추후 card id로 map key index 수정 필요 */}
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
            {/* 추후 card id로 map key index 수정 필요 */}
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
