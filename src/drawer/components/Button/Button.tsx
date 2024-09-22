import { StyledButton } from './Button.style';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isFilled?: boolean;
}

export const Button = ({ text, onClick, isFilled, ...props }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} $isFilled={isFilled} {...props}>
      {text}
    </StyledButton>
  );
};
