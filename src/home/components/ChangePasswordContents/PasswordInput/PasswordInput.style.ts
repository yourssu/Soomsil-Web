import { SimpleTextField } from '@yourssu/design-system-react';
import styled from 'styled-components';

export const StyledInput = styled(SimpleTextField)`
  width: 100%;
  height: 3rem;
`;

export const StyledErrorMessageContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const StyledErrorMessage = styled.div`
  ${({ theme }) => theme.typo.caption1};
  color: #ff5252;
  margin: 8px 8px 0 8px;
`;
