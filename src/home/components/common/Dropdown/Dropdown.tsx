import { ReactNode } from 'react';

import { Container } from './Dropdown.style';

// JSX를 반환하도록 수정
export const Dropdown = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};
