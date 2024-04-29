import { StyledInput, StyledErrorMessage } from './PasswordInput.style';

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
  return (
    <>
      <StyledInput
        isFocused={true}
        placeholder={placeholder}
        type="password"
        value={value}
        onChange={(event) => onChangeHandler(event.target.value)}
        isNegative={isError}
        disabled={disabled}
      />
      {isError && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
    </>
  );
};
