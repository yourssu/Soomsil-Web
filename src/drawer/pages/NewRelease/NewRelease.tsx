import { SMALL_DESKTOP_MEDIA_QUERY } from '@/drawer/components/Category/Category.type';
import { CategoryDropdownMenu } from '@/drawer/components/Category/CategoryDropdownMenu/CategoryDropdownMenu';
import { RankingCategory } from '@/drawer/components/Category/RankingCategory';
import { BigDrawerCard } from '@/drawer/components/DrawerCard/BigDrawerCard';
import { useGetNewRelease } from '@/drawer/hooks/useGetNewRelease';
import { useMediaQuery } from '@/hooks/useMediaQuery';

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
  const { newReleases } = useGetNewRelease();
  const isSmallDesktop = useMediaQuery(SMALL_DESKTOP_MEDIA_QUERY);

  return (
    <StyledContainer>
      {!isSmallDesktop && <RankingCategory />}
      <StyledRankingContainer $isSmallDesktop={isSmallDesktop}>
        <div>
          {isSmallDesktop && <CategoryDropdownMenu />}
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
