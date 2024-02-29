import { Category } from '../Category/Category';

import {
  StyledCategoryContainer,
  StyledCategoryDescription,
  StyledCategoryTitle,
  StyledCategoryWithoutAllContainer,
} from './CategoryWithoutAll.style';

interface CategoryWithoutAllProps {
  isWarned?: boolean;
}

export const CategoryWithoutAll = ({ isWarned }: CategoryWithoutAllProps) => {
  return (
    <StyledCategoryWithoutAllContainer>
      <StyledCategoryContainer>
        <StyledCategoryTitle $isWarned={isWarned}>카테고리 *</StyledCategoryTitle>
        <StyledCategoryDescription>(중복 선택 불가)</StyledCategoryDescription>
      </StyledCategoryContainer>
      <Category isAll={false} />
    </StyledCategoryWithoutAllContainer>
  );
};
