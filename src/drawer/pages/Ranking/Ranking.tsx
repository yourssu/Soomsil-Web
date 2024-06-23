import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { CategoryDropdownMenu } from '@/drawer/components/Category/CategoryDropdownMenu/CategoryDropdownMenu';
import { RankingCategory } from '@/drawer/components/Category/RankingCategory';
import { DetectClick } from '@/drawer/components/DetectClick/DetectClick';
import { BigDrawerCard } from '@/drawer/components/DrawerCard/BigDrawerCard';
import { GrayButton } from '@/drawer/components/GrayButton/GrayButton';
import { SMALL_DESKTOP_MEDIA_QUERY } from '@/drawer/constants/mobileview.constant';
import { useGetNewRelease } from '@/drawer/hooks/useGetNewRelease';
import { useGetStarRank } from '@/drawer/hooks/useGetStarRank';
import { CategoryState } from '@/drawer/recoil/CategoryState';
import { useMediaQuery } from '@/hooks/useMediaQuery';

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
  const [selectedCategory, setSelectedCategory] = useRecoilState(CategoryState);
  const { data: newReleases } = useGetNewRelease({
    responseType: 'WEB',
    category: selectedCategory,
  });
  const { data: rankings } = useGetStarRank({
    responseType: 'WEB',
    category: selectedCategory,
  });
  const isSmallDesktop = useMediaQuery(SMALL_DESKTOP_MEDIA_QUERY);

  useEffect(() => {
    setSelectedCategory('');
  }, []);

  return (
    <StyledContainer>
      {!isSmallDesktop && <RankingCategory />}
      <StyledRankingContainer $isSmallDesktop={isSmallDesktop}>
        <div>
          {isSmallDesktop && <CategoryDropdownMenu />}
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
            {rankings &&
              rankings.pages[0].slice(0, 3).map((product) => (
                <DetectClick key={product.productNo} product={product}>
                  <BigDrawerCard
                    link={`/drawer/services/${product.productNo}`}
                    title={product.productTitle}
                    body={product.productSubTitle}
                    bookmarkCount={product.count}
                    isBookmarked={product.isBookmarked}
                    bigImgSrc={product.introductionImage[0]}
                    smallImgSrc={product.mainImage}
                  />
                </DetectClick>
              ))}
          </StyledCardContainer>
        </div>
        <StyledImage
          src="https://yourssu-post-attachments-stg.s3.ap-northeast-2.amazonaws.com/soomsil.jpeg"
          alt="drawer main image1"
        />
        <StyledImage
          src="https://yourssu-post-attachments-stg.s3.ap-northeast-2.amazonaws.com/animalssu.jpeg"
          alt="drawer main image2"
        />
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
            {newReleases &&
              newReleases.pages[0].slice(0, 3).map((product) => (
                <DetectClick key={product.productNo} product={product}>
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
                </DetectClick>
              ))}
          </StyledCardContainer>
        </div>
      </StyledRankingContainer>
    </StyledContainer>
  );
};
