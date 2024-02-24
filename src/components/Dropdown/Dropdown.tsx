import { StyledContainer } from './Dropdown.style';

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  padding: string;
  bottom: string;
  right?: string;
  left?: string;
}

export const Dropdown = ({ children, padding, bottom, right, left, onClick }: DropdownProps) => {
  return (
    <StyledContainer $padding={padding} $bottom={bottom} $right={right} $left={left} onClick={onClick}>
      {children}
    </StyledContainer>
  );
};
