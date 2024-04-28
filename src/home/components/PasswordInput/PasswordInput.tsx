import { StyledInput, StyledErrorMessageContainer } from './PasswordInput.style';

interface PasswordInputProps {
  value: string;
  onChangeHandler: (value: string) => void;
  isError: boolean;
  errorMessage: string;
}

export const PasswordInput = ({
  value,
  onChangeHandler,
  isError,
  errorMessage,
}: PasswordInputProps) => {
  return (
    <div>
      <StyledInput
        type="password"
        value={value}
        onChange={(event) => onChangeHandler(event.target.value)}
        isNegative={isError}
        isFocused={true}
      />
      {isError && <StyledErrorMessageContainer>{errorMessage}</StyledErrorMessageContainer>}
    </div>
  );
};
