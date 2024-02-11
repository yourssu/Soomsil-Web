import { ReactNode } from 'react';

import { StyledContainer } from './Dropdown.style';

export const Dropdown = ({ children }: { children: ReactNode }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
