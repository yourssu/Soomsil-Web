import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8.56rem;
`;

interface StyledRankingCategoryContainerProps {
  $isSmallDesktop?: boolean;
}

export const StyledRankingContainer = styled.section<StyledRankingCategoryContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 4rem;
`;

export const StyledEmptyContainer = styled.section`
  width: 80rem;
`;

export const StyledCardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 25.5rem);
  gap: 1.75rem;
  margin-top: 2rem;
`;

export const StyledDescription = styled.p`
  ${({ theme }) => theme.color.textPrimary};
  width: 80rem;

  ${({ theme }) => theme.typo.subtitle2};
`;
