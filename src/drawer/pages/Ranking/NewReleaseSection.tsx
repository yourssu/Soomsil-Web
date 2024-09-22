import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { BigDrawerCard } from '@/drawer/components/DrawerCard/BigDrawerCard';
import { GrayButton } from '@/drawer/components/GrayButton/GrayButton';
import { useGetNewRelease } from '@/drawer/hooks/useGetNewRelease';
import { CategoryState } from '@/drawer/recoil/CategoryState';

import {
  StyledBetweenContainer,
  StyledCardContainer,
  StyledDescription,
  StyledTextContainer,
  StyledTitle,
} from './Ranking.style';

export const NewReleaseSection = () => {
  const navigate = useNavigate();
  const selectedCategory = useRecoilValue(CategoryState);

  const { data: newReleases } = useGetNewRelease({
    responseType: 'WEB',
    category: selectedCategory,
  });

  return (
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
        {newReleases.pages[0].slice(0, 3).map((product) => (
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
  );
};
