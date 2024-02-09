import { ReactNode } from 'react';

import { Container } from './Dropdown.style';

export const Dropdown = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};
