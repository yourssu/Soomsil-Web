import { useState, useEffect } from 'react';

import { useFormContext } from 'react-hook-form';

import { Category } from '../Category/Category';

import {
  StyledCategoryContainer,
  StyledCategoryDescription,
  StyledCategoryTitle,
  StyledCategoryWithoutAllContainer,
} from './CategoryWithoutAll.style';

export const CategoryWithoutAll = () => {
  const { formState, getValues } = useFormContext();

  const [isWarned, setIsWarned] = useState(false);

  useEffect(() => {
    const value = getValues('category');

    if (formState.isSubmitted && !value) {
      setIsWarned(true);
    } else {
      setIsWarned(false);
    }
  }, [formState, getValues]);

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
