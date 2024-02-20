import { InputHTMLAttributes, useState } from 'react';

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
  isNecessary?: boolean;
  isWarned?: boolean;
}

export const Input = ({ title, description, isNecessary, isWarned, ...props }: InputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <StyledContainer>
      <StyledLabelContainer>
        <StyledLabelTitle htmlFor={title}>{isNecessary ? `${title} *` : title}</StyledLabelTitle>
        <StyledLabelDescription>{description}</StyledLabelDescription>
      </StyledLabelContainer>
      <StyledInputContainer>
        <StyledInput
          value={inputValue}
          onChange={handleInputChange}
          id={title}
          $isWarned={isWarned}
          {...props}
        />
        {isWarned ? (
          <StyledInputLength $isWarned={true}>*{title}은 필수값입니다.</StyledInputLength>
        ) : (
          <StyledInputLength>
            {inputValue.length}/{props.maxLength}
          </StyledInputLength>
        )}
      </StyledInputContainer>
    </StyledContainer>
  );
};
