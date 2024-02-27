import { useState } from 'react';

import { CheckBox } from '@yourssu/design-system-react';

import { StyledCategoryContainer, StyledCategoryWithoutAllContainer } from './Category.style';

interface IsAllProps {
  isAll: boolean;
}

interface CategoryProps {
  id: number;
  title: string;
  subcategories?: string;
}

const CategoryList: CategoryProps[] = [
  { id: 1, title: '전체' },
  { id: 2, title: '교내생활' },
  { id: 3, title: '취미', subcategories: '(음악, 스포츠, 게임, 여행)' },
  { id: 4, title: '건강', subcategories: '(건강 및 피트니스, 의료)' },
  { id: 5, title: 'IT', subcategories: '(AI, 개발자, 디자인)' },
  { id: 6, title: '지식', subcategories: '(비즈니스, 교육, 뉴스, 금융)' },
  { id: 7, title: '라이프스타일', subcategories: '(소셜 네트워킹, 미디어, 일상)' },
  { id: 8, title: '기타' },
];

export const Category = ({ isAll }: IsAllProps) => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const handleCategorySelect = (categoryId: number) => {
    setSelectedCategory((prev) => (prev === categoryId ? null : categoryId));
  };

  return (
    <>
      {isAll ? (
        /* isAll이 true일 때 - 사이드에 위치한 카테고리*/
        <StyledCategoryContainer>
          <div>카테고리 유형</div>
          {CategoryList.map(({ id, title }) => (
            <CheckBox key={id}>{title}</CheckBox>
          ))}
        </StyledCategoryContainer>
      ) : (
        /* isAll이 false일 때 - 등록 페이지에 위치한 카테고리*/
        <StyledCategoryWithoutAllContainer>
          {CategoryList.slice(1).map(({ id, title, subcategories }) => (
            <CheckBox
              size="medium"
              key={id}
              isSelected={selectedCategory === id}
              onChange={() => handleCategorySelect(id)}
            >{`${title} ${subcategories ?? ''}`}</CheckBox>
          ))}
        </StyledCategoryWithoutAllContainer>
      )}
    </>
  );
};
