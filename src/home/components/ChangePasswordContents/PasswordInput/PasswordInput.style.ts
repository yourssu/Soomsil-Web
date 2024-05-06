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
  color: ${({ theme }) => theme.color.textWarned};
  margin: 8px 8px 0 8px;
`;

export const StyledIcon = styled.div`
  cursor: pointer;
  margin-left: 8px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;
