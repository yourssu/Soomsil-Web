import { CheckBox } from '@yourssu/design-system-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { CategoryState } from '@/drawer/recoil/CategoryState';

import { StyledRankingCategoryContainer } from './Category.style';
import { CategoryList } from './Category.type';

export const RankingCategory = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useRecoilState(CategoryState);

  const handleChangeCategory = (category: string) => {
    setSelectedCategory(category);

    if (location.pathname === '/drawer/rankings') {
      navigate('/drawer/newRelease');
    }
  };

  return (
    <StyledRankingCategoryContainer>
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
    </StyledRankingCategoryContainer>
  );
};
