import { useEffect } from 'react';

import { useSetRecoilState } from 'recoil';

import { CategoryDropdownMenu } from '@/drawer/components/Category/CategoryDropdownMenu/CategoryDropdownMenu';
import { RankingCategory } from '@/drawer/components/Category/RankingCategory';
import { SMALL_DESKTOP_MEDIA_QUERY } from '@/drawer/constants/mobileview.constant';
import { CategoryState } from '@/drawer/recoil/CategoryState';
import { useMediaQuery } from '@/hooks/useMediaQuery';

import { BannerSection } from './BannerSection';
import { NewReleaseSection } from './NewReleaseSection';
import { StyledContainer, StyledRankingContainer } from './Ranking.style';
import { RankingSection } from './RankingSection';

export const Ranking = () => {
  const setSelectedCategory = useSetRecoilState(CategoryState);

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
          <RankingSection />
        </div>
        <BannerSection />
        <NewReleaseSection />
      </StyledRankingContainer>
    </StyledContainer>
  );
};
