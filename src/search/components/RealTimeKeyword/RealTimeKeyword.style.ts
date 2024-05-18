import { ListItem } from '@yourssu/design-system-react';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;
  padding: 1.25rem;
  width: 25rem;
  height: 38.7rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.color.borderNormal};
  background: ${({ theme }) => theme.color.bgNormal};
`;

export const StyledTitleContainer = styled.div`
  padding: 0.5rem;
  margin-bottom: 0.75rem;
`;

export const StyledTitle = styled.div`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.color.textPrimary};
  ${({ theme }) => theme.typo.subtitle3};
`;

export const StyledUpdateDate = styled.div`
  color: ${({ theme }) => theme.color.textTertiary};
  ${({ theme }) => theme.typo.body3}
`;

export const StyledList = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-auto-flow: column;
  grid-column-gap: 0.5rem;
`;

export const StyledListItem = styled(ListItem)`
  padding: 0.625rem 0.75rem;
`;

export const StyledListItemKeyword = styled.p`
  color: ${({ theme }) => theme.color.textPrimary};
  ${({ theme }) => theme.typo.body1};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

interface StyledListItemRankingProp {
  $rankingNumber: number;
}

export const StyledListItemRanking = styled.span<StyledListItemRankingProp>`
  color: ${(prop) => (prop.$rankingNumber < 4 ? '#8a2ac5' : '#8E9398')};
  font-family: 'Spoqa Han Sans Neo';
  font-size: 1.155rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  margin-right: 1rem;
`;

export const StyledImage = styled.img`
  width: 12.6875rem;
  height: 8.5rem;

  position: absolute;
  right: 0;
  top: -3.125rem;
`;
