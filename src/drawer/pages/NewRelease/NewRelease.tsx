import { Category } from '@/drawer/components/Category/Category';
import { BigDrawerCard } from '@/drawer/components/DrawerCard/BigDrawerCard';
import { useGetNewRelease } from '@/drawer/hooks/useGetNewRelease';

import {
  StyledBetweenContainer,
  StyledCardContainer,
  StyledContainer,
  StyledDescription,
  StyledRankingContainer,
  StyledTextContainer,
  StyledTitle,
} from '../Ranking/Ranking.style';

export const NewRelease = () => {
  const { newReleases, setSelectedCategory } = useGetNewRelease();

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <StyledContainer>
      <Category isAll={true} onCategorySelect={handleCategorySelect} />
      <StyledRankingContainer>
        <div>
          <StyledBetweenContainer>
            <StyledTextContainer>
              <StyledTitle>New Releases</StyledTitle>
              <StyledDescription>새로 출시된 서비스를 확인해보세요.</StyledDescription>
            </StyledTextContainer>
          </StyledBetweenContainer>
          <StyledCardContainer>
            {newReleases.map((product) => (
              <BigDrawerCard
                key={product.productNo}
                link={''}
                title={product.productTitle}
                body={product.productSubTitle}
                bookmarkCount={product.productBookmarkKey}
                isBookmarked={product.isBookmarked}
                bigImgSrc={product.mainImage}
                smallImgSrc={product.introductionImage[0]}
              />
            ))}
          </StyledCardContainer>
        </div>
      </StyledRankingContainer>
    </StyledContainer>
  );
};
