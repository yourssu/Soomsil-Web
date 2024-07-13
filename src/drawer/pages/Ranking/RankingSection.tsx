import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { BigDrawerCard } from '@/drawer/components/DrawerCard/BigDrawerCard';
import { GrayButton } from '@/drawer/components/GrayButton/GrayButton';
import { useGetStarRank } from '@/drawer/hooks/useGetStarRank';
import { CategoryState } from '@/drawer/recoil/CategoryState';

import {
  StyledBetweenContainer,
  StyledCardContainer,
  StyledDescription,
  StyledTextContainer,
  StyledTitle,
} from './Ranking.style';

export const RankingSection = () => {
  const navigate = useNavigate();
  const selectedCategory = useRecoilValue(CategoryState);

  const { data: rankings } = useGetStarRank({
    responseType: 'WEB',
    category: selectedCategory,
  });

  return (
    <>
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
        {rankings.pages[0].slice(0, 3).map((product) => (
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
    </>
  );
};
