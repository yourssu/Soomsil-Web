import { useState } from 'react';

import { IcEyeclosedLine, IcEyeopenLine } from '@yourssu/design-system-react';

import { StyledInput, StyledErrorMessage, StyledIcon } from './PasswordInput.style';

interface PasswordInputProps {
  placeholder?: string;
  value: string;
  onChangeHandler: (value: string) => void;
  isError?: boolean;
  errorMessage?: string;
  disabled?: boolean;
}

export const PasswordInput = ({
  placeholder,
  value,
  onChangeHandler,
  isError,
  errorMessage,
  disabled = false,
}: PasswordInputProps) => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      <StyledInput
        isFocused={true}
        placeholder={placeholder}
        type={isHidden ? 'password' : 'text'}
        value={value}
        onChange={(event) => onChangeHandler(event.target.value)}
        isNegative={isError}
        disabled={disabled}
        suffix={
          <StyledIcon onClick={toggleVisibility}>
            {isHidden ? <IcEyeclosedLine /> : <IcEyeopenLine />}
          </StyledIcon>
        }
      />
      {isError && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
    </>
  );
};
