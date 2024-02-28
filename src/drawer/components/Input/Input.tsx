import { InputHTMLAttributes, useMemo, useState } from 'react';

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
}

export const Input = ({ title, description, validate, ...props }: InputProps) => {
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

  return (
    <StyledContainer>
      <StyledLabelContainer>
        <StyledLabelTitle htmlFor={title} $isWarned={isWarned}>
          {props.required ? `${title} *` : title}
        </StyledLabelTitle>
        <StyledLabelDescription>{description}</StyledLabelDescription>
      </StyledLabelContainer>
      <StyledInputContainer>
        <StyledInput
          id={title}
          value={inputValue}
          onChange={handleInputChange}
          $isWarned={isWarned}
          $hasText={inputValue.length > 0}
          {...props}
        />
        {checkValid}
      </StyledInputContainer>
    </StyledContainer>
  );
};
