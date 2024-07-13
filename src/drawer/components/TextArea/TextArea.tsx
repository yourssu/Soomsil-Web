import { TextareaHTMLAttributes, useState, useEffect } from 'react';

import { useFormContext } from 'react-hook-form';

import {
  StyledContainer,
  StyledLabelContainer,
  StyledLabelDescription,
  StyledLabelTitle,
  StyledTextArea,
  StyledTextAreaContainer,
  StyledTextAreaLength,
} from './TextArea.style';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  title: string;
  description: string;
  name: string;
}

export const TextArea = ({ title, description, name, ...props }: TextAreaProps) => {
  const { register, formState, watch } = useFormContext();

  const textAreaValue = watch(name, '');
  const [isWarned, setIsWarned] = useState(false);

  useEffect(() => {
    if (formState.isSubmitted && !textAreaValue) setIsWarned(true);
  }, [formState, textAreaValue]);

  return (
    <StyledContainer>
      <StyledLabelContainer>
        <StyledLabelTitle htmlFor={title} $isWarned={isWarned}>
          {props.required ? `${title} *` : title}
        </StyledLabelTitle>
        <StyledLabelDescription>{description}</StyledLabelDescription>
      </StyledLabelContainer>
      <StyledTextAreaContainer>
        <StyledTextArea
          {...register(name, {
            required: props.required,
            onChange: () => {
              setIsWarned(false);
            },
          })}
          id={title}
          rows={8}
          $isWarned={isWarned}
          $hasText={textAreaValue.length > 0}
          {...props}
          required={false}
        />
        {isWarned ? (
          <StyledTextAreaLength $isWarned={true}>*{title}은 필수값입니다.</StyledTextAreaLength>
        ) : (
          <StyledTextAreaLength>
            {textAreaValue.length}/{props.maxLength}
          </StyledTextAreaLength>
        )}
      </StyledTextAreaContainer>
    </StyledContainer>
  );
};
