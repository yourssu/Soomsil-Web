import { useState } from 'react';

import { CheckBox } from '@yourssu/design-system-react';

import { StyledCategoryContainer, StyledCategoryWithoutAllContainer } from './Category.style';

interface IsAllProps {
  isAll: boolean;
}

interface CategoryProps {
  category: string;
  title: string;
  subcategories?: string;
}

const CategoryList: CategoryProps[] = [
  { category: '', title: '전체' },
  { category: 'CAMPUS', title: '교내생활' },
  { category: 'HOBBY', title: '취미', subcategories: '(음악, 스포츠, 게임, 여행)' },
  { category: 'HEALTH', title: '건강', subcategories: '(건강 및 피트니스, 의료)' },
  { category: 'IT', title: 'IT', subcategories: '(AI, 개발자, 디자인)' },
  { category: 'KNOWLEDGE', title: '지식', subcategories: '(비즈니스, 교육, 뉴스, 금융)' },
  { category: 'LIFESTYLE', title: '라이프스타일', subcategories: '(소셜 네트워킹, 미디어, 일상)' },
  { category: 'ETC', title: '기타' },
];

export const Category = ({ isAll }: IsAllProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory((prev) => (prev === category ? null : category));
  };

  return (
    <>
      {isAll ? (
        /* isAll이 true일 때 - 사이드에 위치한 카테고리*/
        <StyledCategoryContainer>
          <div>카테고리 유형</div>
          {CategoryList.map(({ category, title }) => (
            <CheckBox
              key={category}
              isSelected={selectedCategory === category}
              onChange={() => handleCategorySelect(category)}
            >
              {title}
            </CheckBox>
          ))}
        </StyledCategoryContainer>
      ) : (
        /* isAll이 false일 때 - 등록 페이지에 위치한 카테고리*/
        <StyledCategoryWithoutAllContainer>
          {CategoryList.slice(1).map(({ category, title, subcategories }) => (
            <CheckBox
              size="medium"
              key={category}
              isSelected={selectedCategory === category}
              onChange={() => handleCategorySelect(category)}
            >{`${title} ${subcategories ?? ''}`}</CheckBox>
          ))}
        </StyledCategoryWithoutAllContainer>
      )}
    </>
  );
};
