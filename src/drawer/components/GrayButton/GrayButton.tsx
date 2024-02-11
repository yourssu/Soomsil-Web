import { StyledGrayButton } from './GrayButton.style';

interface GrayButtonProps {
  text: string;
  onClick: () => void;
}

export const GrayButton = ({ text, onClick }: GrayButtonProps) => {
  return <StyledGrayButton onClick={onClick}>{text}</StyledGrayButton>;
};
