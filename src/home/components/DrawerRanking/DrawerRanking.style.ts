import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: min-content;
  padding: 1.4375rem;

  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.color.borderNormal};
`;

export const StyledTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const StyledTitle = styled.div`
  color: ${({ theme }) => theme.color.textPrimary};
  ${({ theme }) => theme.typo.subtitle3};
`;

export const StyledAllViewButton = styled(Link)`
  padding-right: 0.1875rem;
  color: ${({ theme }) => theme.color.textTertiary};
  ${({ theme }) => theme.typo.button3};
`;

export const StyledRankCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: max-content;
  margin-bottom: 0.8125rem;
`;
