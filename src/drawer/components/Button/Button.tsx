import { StyledButton } from './Button.style';

interface ButtonProps {
  text: string;
  onClick: () => void;
  isFilled?: boolean;
}

export const Button = ({ text, onClick, isFilled }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} $isFilled={isFilled}>
      {text}
    </StyledButton>
  );
};
