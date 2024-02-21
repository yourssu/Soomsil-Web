import { StyledContainer } from './Dropdown.style';

export interface DropdownProps {
  children: React.ReactNode;
  padding: string;
  bottom: string;
  right?: string;
  left?: string;
}

export const Dropdown = ({ children, padding, bottom, right, left }: DropdownProps) => {
  return (
    <StyledContainer $padding={padding} $bottom={bottom} $right={right} $left={left}>
      {children}
    </StyledContainer>
  );
};
