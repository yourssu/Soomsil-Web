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

  return (
    <StyledContainer>
      <Category isAll={true} handleCategorySelect={setSelectedCategory} />
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
