import { InputHTMLAttributes, useMemo, useState, useEffect } from 'react';

import { useFormContext } from 'react-hook-form';

import {
  StyledContainer,
  StyledInput,
  StyledInputContainer,
  StyledInputLength,
  StyledLabelContainer,
  StyledLabelDescription,
  StyledLabelTitle,
} from './Input.style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  description: string;
  validate?: (value: string) => boolean;
  name: string;
}

export const Input = ({ title, description, validate, name, required, ...props }: InputProps) => {
  const { register, formState } = useFormContext();

  const [inputValue, setInputValue] = useState('');
  const [isWarned, setIsWarned] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const checkValid = useMemo(() => {
    if (validate && validate(inputValue) && inputValue.length > 0) {
      setIsWarned(true);
      return <StyledInputLength $isWarned={true}>유효하지 않은 링크입니다.</StyledInputLength>;
    } else {
      setIsWarned(false);
      return (
        <StyledInputLength>
          {inputValue.length}/{props.maxLength}
        </StyledInputLength>
      );
    }
  }, [inputValue, props.maxLength, validate]);

  useEffect(() => {
    if (formState.errors[name]) {
      console.log(formState.errors[name]); // 삭제 예정
      setIsWarned(true);
    }
  }, [formState, setIsWarned, name]);

  return (
    <StyledContainer>
      <StyledLabelContainer>
        <StyledLabelTitle htmlFor={title} $isWarned={isWarned}>
          {required ? `${title} *` : title}
        </StyledLabelTitle>
        <StyledLabelDescription>{description}</StyledLabelDescription>
      </StyledLabelContainer>
      <StyledInputContainer>
        <StyledInput
          {...register(name, { required: required })}
          id={title}
          value={inputValue}
          onChange={handleInputChange}
          $isWarned={isWarned}
          $hasText={inputValue.length > 0}
          {...props}
          required={false}
        />
        {checkValid}
      </StyledInputContainer>
    </StyledContainer>
  );
};
