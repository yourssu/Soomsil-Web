import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import drawerMainImage1 from '@/drawer/assets/drawer_main_image1.png';
import drawerMainImage2 from '@/drawer/assets/drawer_main_image2.png';
import { RankingCategory } from '@/drawer/components/Category/RankingCategory';
import { BigDrawerCard } from '@/drawer/components/DrawerCard/BigDrawerCard';
import { GrayButton } from '@/drawer/components/GrayButton/GrayButton';
import { useGetMain } from '@/drawer/hooks/useGetMain';

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
  const navigate = useNavigate();

  const { newReleases, rankings, setSelectedCategory } = useGetMain();

  useEffect(() => {
    setSelectedCategory('');
  }, []);

  return (
    <StyledContainer>
      <RankingCategory />
      <StyledRankingContainer>
        <div>
          <StyledBetweenContainer>
            <StyledTextContainer>
              <StyledTitle>Star Ranking</StyledTitle>
              <StyledDescription>실시간 랭킹을 확인해보세요.</StyledDescription>
            </StyledTextContainer>
            <GrayButton
              text={'더보기'}
              onClick={() => {
                navigate('/drawer/starRanking');
              }}
            />
          </StyledBetweenContainer>
          <StyledCardContainer>
            {rankings.slice(0, 3).map((product) => (
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
        <StyledImage src={drawerMainImage1} alt="drawer main image1" />
        <StyledImage src={drawerMainImage2} alt="drawer main image2" />
        <div>
          <StyledBetweenContainer>
            <StyledTextContainer>
              <StyledTitle>New Releases</StyledTitle>
              <StyledDescription>새로 출시된 서비스를 확인해보세요.</StyledDescription>
            </StyledTextContainer>
            <GrayButton
              text={'더보기'}
              onClick={() => {
                navigate('/drawer/newRelease');
              }}
            />
          </StyledBetweenContainer>
          <StyledCardContainer>
            {newReleases.slice(0, 3).map((product) => (
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
