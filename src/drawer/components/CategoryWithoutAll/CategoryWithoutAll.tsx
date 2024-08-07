import { useEffect, useState } from 'react';

import { useFormContext } from 'react-hook-form';

import { RegisterCategory } from '../Category/RegisterCategory';

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
    setIsWarned(formState.isSubmitted && !getValues('category'));
  }, [formState, getValues]);

  return (
    <StyledCategoryWithoutAllContainer>
      <StyledCategoryContainer>
        <StyledCategoryTitle $isWarned={isWarned}>카테고리 *</StyledCategoryTitle>
        <StyledCategoryDescription>(중복 선택 불가)</StyledCategoryDescription>
      </StyledCategoryContainer>
      <RegisterCategory />
    </StyledCategoryWithoutAllContainer>
  );
};
