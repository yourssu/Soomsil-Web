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
  width: number;
  length: number;
  inputWidth: number;
  isWarned?: boolean;
}

export const Input = ({
  title,
  description,
  width,
  length,
  inputWidth,
  isWarned,
  ...props
}: InputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <StyledContainer $width={width}>
      <StyledLabelContainer>
        <StyledLabelTitle htmlFor={title}>{title}</StyledLabelTitle>
        <StyledLabelDescription>{description}</StyledLabelDescription>
      </StyledLabelContainer>
      <StyledInputContainer $inputWidth={inputWidth}>
        <StyledInput
          value={inputValue}
          onChange={handleInputChange}
          maxLength={length - 1}
          id={title}
          $isWarned={isWarned}
          {...props}
        />
        {isWarned ? (
          <StyledInputLength $isWarned={true}>*은 필수값입니다.</StyledInputLength>
        ) : (
          <StyledInputLength>
            {inputValue.length}/{length}
          </StyledInputLength>
        )}
      </StyledInputContainer>
    </StyledContainer>
  );
};
