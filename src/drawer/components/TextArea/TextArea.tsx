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
  const { register, formState, getValues } = useFormContext();

  const [textAreaValue, setTextAreaValue] = useState('');
  const [isWarned, setIsWarned] = useState(false);

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIsWarned(false);
    setTextAreaValue(event.target.value);
  };

  useEffect(() => {
    const value = getValues(name);
    if (formState.isSubmitted && !value) setIsWarned(true);
  }, [formState, getValues, setIsWarned, name]);

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
          {...register(name, { required: props.required })}
          id={title}
          value={textAreaValue}
          onChange={handleTextAreaChange}
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
