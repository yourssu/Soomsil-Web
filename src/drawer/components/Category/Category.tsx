import { CheckBox } from '@yourssu/design-system-react';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { CategoryState } from '@/drawer/recoil/CategoryState';

import { StyledCategoryContainer, StyledCategoryWithoutAllContainer } from './Category.style';

interface CategoryCommonProps {
  isRank?: boolean;
  handleCategorySelect?: (category: string) => void;
}

interface CategoryProps extends CategoryCommonProps {
  isAll: boolean;
}

interface PageCategoryProps extends CategoryCommonProps {
  selectedCategory: string | null;
}

interface CategoryInfo {
  category: string;
  title: string;
  subcategories?: string;
}

const CategoryList: CategoryInfo[] = [
  { category: '', title: '전체' },
  { category: 'CAMPUS', title: '교내생활' },
  { category: 'HOBBY', title: '취미', subcategories: '(음악, 스포츠, 게임, 여행)' },
  { category: 'HEALTH', title: '건강', subcategories: '(건강 및 피트니스, 의료)' },
  { category: 'IT', title: 'IT', subcategories: '(AI, 개발자, 디자인)' },
  { category: 'KNOWLEDGE', title: '지식', subcategories: '(비즈니스, 교육, 뉴스, 금융)' },
  { category: 'LIFESTYLE', title: '라이프스타일', subcategories: '(소셜 네트워킹, 미디어, 일상)' },
  { category: 'ETC', title: '기타' },
];

const RegisterCategory = ({ selectedCategory, handleCategorySelect }: PageCategoryProps) => {
  const { register } = useFormContext();
  const { onChange, name, ref } = register('category', { required: true });

  return (
    <StyledCategoryWithoutAllContainer>
      {CategoryList.slice(1).map(({ category, title, subcategories }) => (
        <CheckBox
          value={category}
          type={'radio'}
          onChange={(event) => {
            handleCategorySelect?.(category);
            onChange(event);
          }}
          name={name}
          ref={ref}
          size="medium"
          key={category}
          isSelected={selectedCategory === category}
        >{`${title} ${subcategories ?? ''}`}</CheckBox>
      ))}
    </StyledCategoryWithoutAllContainer>
  );
};

const RankingCategory = ({ selectedCategory, handleCategorySelect, isRank }: PageCategoryProps) => {
  const navigate = useNavigate();

  return (
    <StyledCategoryContainer>
      <div>카테고리 유형</div>
      {CategoryList.map(({ category, title }) => (
        <CheckBox
          key={category}
          isSelected={selectedCategory === category}
          onChange={() => {
            handleCategorySelect?.(category);
            if (!isRank) {
              navigate('/drawer/newRelease');
            }
          }}
        >
          {title}
        </CheckBox>
      ))}
    </StyledCategoryContainer>
  );
};

export const Category = ({ isAll, handleCategorySelect, isRank }: CategoryProps) => {
  const [selectedCategory, setSelectedCategory] = useRecoilState(CategoryState);

  const handleCategorySelectData = (category: string) => {
    const newSelectedCategory = selectedCategory === category ? '' : category;

    setSelectedCategory(newSelectedCategory);
    handleCategorySelect?.(newSelectedCategory);
  };

  return (
    <>
      {isAll ? (
        <RankingCategory
          selectedCategory={selectedCategory}
          handleCategorySelect={handleCategorySelectData}
          isRank={isRank}
        />
      ) : (
        <RegisterCategory
          selectedCategory={selectedCategory}
          handleCategorySelect={handleCategorySelectData}
        />
      )}
    </>
  );
};
