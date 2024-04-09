import { CheckBox } from '@yourssu/design-system-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { CategoryList } from '@/drawer/constants/category.constant';
import { CategoryState } from '@/drawer/recoil/CategoryState';

import { StyledDropdownCategoryContainer, StyledRankingCategoryContainer } from './Category.style';

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
    ? StyledDropdownCategoryContainer
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
