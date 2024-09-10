import { CheckBox } from '@yourssu/design-system-react';
import { useFormContext } from 'react-hook-form';
import { useRecoilState } from 'recoil';

import { CategoryList } from '@/drawer/constants/category.constant';
import { CategoryState } from '@/drawer/recoil/CategoryState';

import {
  StyledRegisterCategoryContainer,
  StyledRegisterCategoryErrorMessage,
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

  return (
    <StyledRegisterCategoryContainer id={name}>
      {CategoryList.slice(1).map(({ category, title, subcategories }) => (
        <CheckBox
          key={category}
          value={category}
          type="radio"
          size="medium"
          isSelected={selectedCategory === category}
          name={name}
          ref={ref}
          onChange={(event) => {
            setSelectedCategory(category);
            onChange(event);
          }}
          onBlur={onBlur}
        >
          {`${title} ${subcategories ?? ''}`}
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
