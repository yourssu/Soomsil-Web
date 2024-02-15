import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledServiceTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.19rem;
`;

export const StyledServiceModify = styled(Link)`
  ${({ theme }) => theme.typo.button4}
  color: ${({ theme }) => theme.color.textSecondary};
  white-space: nowrap;
  &:hover {
    color: ${({ theme }) => theme.color.textSecondary};
  }
`;

export const StyledServiceText = styled.div`
  ${({ theme }) => theme.typo.button4}
  color: ${({ theme }) => theme.color.textSecondary};
  white-space: nowrap;
`;
