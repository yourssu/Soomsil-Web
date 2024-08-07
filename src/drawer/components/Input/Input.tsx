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
  defaultValue?: string;
}

export const Input = ({
  title,
  description,
  validate,
  name,
  required,
  defaultValue = '',
  ...props
}: InputProps) => {
  const { register, formState, getValues, watch } = useFormContext();

  const inputValue = watch(name, defaultValue);
  const [isWarned, setIsWarned] = useState(false);

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
    if (formState.isSubmitted && !inputValue && required) setIsWarned(true);
  }, [formState, inputValue, name, required]);

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
                if (value === '') return true;
              return validate ? !validate(value) : true;
            },
          })}
          id={title}
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
