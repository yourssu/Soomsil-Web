import { ReactNode } from 'react';

import { StyledContainer } from './Dropdown.style';

export interface DropdownProps {
  padding: string;
  bottom: string;
  right: string;
  children: ReactNode;
}
export const Dropdown = ({ children, padding, bottom, right }: DropdownProps) => {
  return (
    <StyledContainer padding={padding} bottom={bottom} right={right}>
      {children}
    </StyledContainer>
  );
};
