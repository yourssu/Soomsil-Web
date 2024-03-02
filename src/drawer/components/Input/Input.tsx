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
  const { register, formState, getValues } = useFormContext();

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
    const value = getValues(name);
    if (formState.isSubmitted && !value && required) setIsWarned(true);
  }, [formState, getValues, setIsWarned, name, required]);

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
          {...register(name, {
            required: required,
            validate: (value) => {
              const { appStoreUrl, githubUrl, googlePlayUrl, webpageUrl } = getValues();
              if (appStoreUrl || githubUrl || googlePlayUrl || webpageUrl)
                if (value === '') return undefined;

              if (validate) return validate(value) ? '실패 메시지' : undefined;
              else return undefined;
            },
          })}
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
