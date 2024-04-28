import { SimpleTextField } from '@yourssu/design-system-react';
import styled from 'styled-components';

export const StyledInput = styled(SimpleTextField)`
  width: 100%;
  height: 3rem;
  padding: 0.75rem 1rem;
`;

export const StyledErrorMessageContainer = styled.section`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.typo.caption1};
  color: #ff5252;
  padding-top: 0.1rem;
`;
