import { CheckBox } from '@yourssu/design-system-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { CategoryState } from '@/drawer/recoil/CategoryState';

import {
  StyledRankingCategoryContainer,
  StyledSmallDesktopCategoryContainer,
} from './Category.style';
import { CategoryList } from './Category.type';

interface RankingCategoryProps {
  isSmallDesktop?: boolean;
  onDropdownOpenChange?: (open: boolean) => void;
}

export const RankingCategory = ({
  isSmallDesktop = false,
  onDropdownOpenChange,
}: RankingCategoryProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useRecoilState(CategoryState);

  const handleChangeCategory = (category: string) => {
    setSelectedCategory(category);

    if (location.pathname === '/drawer/rankings') {
      navigate('/drawer/newRelease');
    }

    if (onDropdownOpenChange) {
      onDropdownOpenChange(false);
    }
  };

  const Container = isSmallDesktop
    ? StyledSmallDesktopCategoryContainer
    : StyledRankingCategoryContainer;

  return (
    <Container>
      <div>카테고리 유형</div>
      {CategoryList.map(({ category, title }) => (
        <CheckBox
          key={category}
          isSelected={selectedCategory === category}
          onChange={() => handleChangeCategory(category)}
        >
          {title}
        </CheckBox>
      ))}
    </Container>
  );
};
