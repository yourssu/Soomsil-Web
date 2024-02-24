import { TextareaHTMLAttributes, useState } from 'react';

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
  isWarned?: boolean;
}

export const TextArea = ({ title, description, isWarned, ...props }: TextAreaProps) => {
  const [textAreaValue, setTextAreaValue] = useState('');

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(event.target.value);
  };

  return (
    <StyledContainer>
      <StyledLabelContainer>
        <StyledLabelTitle htmlFor={title}>{props.required ? `${title} *` : title}</StyledLabelTitle>
        <StyledLabelDescription>{description}</StyledLabelDescription>
      </StyledLabelContainer>
      <StyledTextAreaContainer>
        <StyledTextArea
          id={title}
          value={textAreaValue}
          onChange={handleTextAreaChange}
          rows={8}
          $isWarned={isWarned}
          $hasText={textAreaValue.length > 0}
          {...props}
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
