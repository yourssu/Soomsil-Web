import { CheckBox } from '@yourssu/design-system-react';
import { useFormContext } from 'react-hook-form';
import { useRecoilState } from 'recoil';

import { CategoryList } from '@/drawer/constants/category.constant';
import { CategoryState } from '@/drawer/recoil/CategoryState';
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
  } = useFormContext();
  const { onChange, onBlur, name, ref } = register('category', {
    required: '카테고리는 필수값입니다.',
  });

  const [selectedCategory, setSelectedCategory] = useRecoilState(CategoryState);
  const isMobileView = useMediaQuery('(max-width: 30rem)');

  return (
    <StyledRegisterCategoryContainer id={name}>
      {CategoryList.slice(1).map(({ category, title, subcategories }) => (
        <CheckBox
          key={category}
          value={category}
          type="radio"
          size={isMobileView ? 'small' : 'medium'}
          isSelected={selectedCategory === category}
          name={name}
          ref={ref}
          onChange={(event) => {
            setSelectedCategory(category);
            onChange(event);
          }}
          onBlur={onBlur}
        >
          <StyledTitle>{`${title} ${subcategories ?? ''}`}</StyledTitle>
        </CheckBox>
      ))}
      {errors[name] && (
        <StyledRegisterCategoryErrorMessage>
          {String(errors[name].message)}
        </StyledRegisterCategoryErrorMessage>
      )}
    </StyledRegisterCategoryContainer>
  );
};
