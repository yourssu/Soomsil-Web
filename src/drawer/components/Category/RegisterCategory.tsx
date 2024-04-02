import { CheckBox } from '@yourssu/design-system-react';
import { useFormContext } from 'react-hook-form';
import { useRecoilState } from 'recoil';

import { CategoryState } from '@/drawer/recoil/CategoryState';

import { StyledRegisterCategoryContainer } from './Category.style';
import { CategoryList } from './Category.type';

export const RegisterCategory = () => {
  const { register } = useFormContext();
  const { onChange, name, ref } = register('category', { required: true });
  const [selectedCategory, setSelectedCategory] = useRecoilState(CategoryState);

  return (
    <StyledRegisterCategoryContainer>
      {CategoryList.slice(1).map(({ category, title, subcategories }) => (
        <CheckBox
          value={category}
          type={'radio'}
          onChange={(event) => {
            setSelectedCategory(category);
            onChange(event);
          }}
          name={name}
          ref={ref}
          size="medium"
          key={category}
          isSelected={selectedCategory === category}
        >{`${title} ${subcategories ?? ''}`}</CheckBox>
      ))}
    </StyledRegisterCategoryContainer>
  );
};
