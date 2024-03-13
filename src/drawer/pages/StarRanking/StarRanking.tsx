import { Category } from '@/drawer/components/Category/Category';
import { BigDrawerCard } from '@/drawer/components/DrawerCard/BigDrawerCard';
import { useGetStarRank } from '@/drawer/hooks/useGetStarRank';

import {
  StyledBetweenContainer,
  StyledCardContainer,
  StyledContainer,
  StyledDescription,
  StyledRankingContainer,
  StyledTextContainer,
  StyledTitle,
} from '../Ranking/Ranking.style';

export const StarRanking = () => {
  const { rankings, setSelectedCategory } = useGetStarRank();

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <StyledContainer>
      <Category isAll={true} isRank={true} handleCategorySelect={handleCategorySelect} />
      <StyledRankingContainer>
        <div>
          <StyledBetweenContainer>
            <StyledTextContainer>
              <StyledTitle>Star Ranking</StyledTitle>
              <StyledDescription>실시간 랭킹을 확인해보세요.</StyledDescription>
            </StyledTextContainer>
          </StyledBetweenContainer>
          <StyledCardContainer>
            {rankings.map((product) => (
              <BigDrawerCard
                key={product.productNo}
                link={`/drawer/services/${product.productNo}`}
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
