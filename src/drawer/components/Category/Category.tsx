import { CheckBox } from '@yourssu/design-system-react';

import { StyledCategoryContainer } from './Category.style';

interface CategoryProps {
  id: number;
  title: string;
}

const CategoryList: CategoryProps[] = [
  { id: 1, title: '전체' },
  { id: 2, title: '교내생활' },
  { id: 3, title: '취미' },
  { id: 4, title: '건강' },
  { id: 5, title: 'IT' },
  { id: 6, title: '지식' },
  { id: 7, title: '라이프스타일' },
  { id: 8, title: '기타' },
];

export const Category = () => {
  return (
    <StyledCategoryContainer>
      <div>카테고리 유형</div>
      {CategoryList.map((index) => (
        <CheckBox key={index.id}>{index.title}</CheckBox>
      ))}
    </StyledCategoryContainer>
  );
};
