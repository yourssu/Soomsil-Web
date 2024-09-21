import { CheckBox } from '@yourssu/design-system-react';
import { useFormContext } from 'react-hook-form';

import { CategoryList } from '@/drawer/constants/category.constant';
import { ServiceFormValues } from '@/drawer/types/form.type';
import { useMediaQuery } from '@/hooks/useMediaQuery';

import {
  StyledRegisterCategoryContainer,
  StyledRegisterCategoryErrorMessage,
  StyledTitle,
} from './RegisterCategory.style';

export const RegisterCategory = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<ServiceFormValues>();

  const watchCategory = watch('category');
  const isMobileView = useMediaQuery('(max-width: 30rem)');

  const getErrorMessage = () => {
    const error = errors['category'];
    if (error) {
      return String(error?.message ?? '');
    }
  };

  return (
    <StyledRegisterCategoryContainer id={'category'}>
      {CategoryList.slice(1).map(({ category, title, subcategories }) => (
        <CheckBox
          key={category}
          value={category}
          type="radio"
          size={isMobileView ? 'small' : 'medium'}
          isSelected={category === watchCategory}
          {...register('category', {
            required: '카테고리는 필수 입력입니다.',
          })}
        >
          <StyledTitle>{`${title} ${subcategories ?? ''}`}</StyledTitle>
        </CheckBox>
      ))}
      <StyledRegisterCategoryErrorMessage>{getErrorMessage()}</StyledRegisterCategoryErrorMessage>
    </StyledRegisterCategoryContainer>
  );
};
