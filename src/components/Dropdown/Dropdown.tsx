import { forwardRef } from 'react';

import { StyledContainer } from './Dropdown.style';

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  padding: string;
  bottom: string;
  right?: string;
  left?: string;
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ children, padding, bottom, right, left, ...props }, ref) => {
    return (
      <StyledContainer
        $padding={padding}
        $bottom={bottom}
        $right={right}
        $left={left}
        ref={ref}
        {...props}
      >
        {children}
      </StyledContainer>
    );
  }
);
