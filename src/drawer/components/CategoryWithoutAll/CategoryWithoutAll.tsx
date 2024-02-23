import { Category } from '../Category/Category';

import {
  StyledCategoryContainer,
  StyledCategoryDescription,
  StyledCategoryTitle,
  StyledCategoryWithoutAllContainer,
} from './CategoryWithoutAll.style';

export const CategoryWithoutAll = () => {
  return (
    <StyledCategoryWithoutAllContainer>
      <StyledCategoryContainer>
        <StyledCategoryTitle>카테고리 *</StyledCategoryTitle>
        <StyledCategoryDescription>(중복 선택 불가)</StyledCategoryDescription>
      </StyledCategoryContainer>
      <Category isAll={false} />
    </StyledCategoryWithoutAllContainer>
  );
};
