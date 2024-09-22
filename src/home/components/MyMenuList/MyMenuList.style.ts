import { ListItem } from '@yourssu/design-system-react';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 45.625rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.color.borderNormal};
  background: ${({ theme }) => theme.color.bgNormal};

  @media (max-width: 90rem) {
    width: 43.75rem;
  }
`;

export const StyledInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: 1.5rem;
`;

export const StyledMenuListTitle = styled.span`
  ${({ theme }) => theme.typo.subtitle3};
  color: ${({ theme }) => theme.color.textPrimary};
`;

export const StyledMenuContainer = styled.div`
  padding: 0.5rem 0;
`;

export const StyledMenuTitle = styled.div`
  padding: 0.75rem 1.25rem;
  ${({ theme }) => theme.typo.subtitle6};
`;

export const StyledListItem = styled(ListItem)`
  border-radius: 1rem;
  padding: 0rem 1.25rem;
  ${({ theme }) => theme.typo.body1};
`;
