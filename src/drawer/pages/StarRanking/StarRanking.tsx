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

  return (
    <StyledContainer>
      <Category isAll={true} isRank={true} handleCategorySelect={setSelectedCategory} />
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
                bookmarkCount={product.count}
                isBookmarked={product.isBookmarked}
                bigImgSrc={product.introductionImage[0]}
                smallImgSrc={product.mainImage}
              />
            ))}
          </StyledCardContainer>
        </div>
      </StyledRankingContainer>
    </StyledContainer>
  );
};
