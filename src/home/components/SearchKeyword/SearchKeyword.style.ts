import { ListItem } from '@yourssu/design-system-react';
import styled from 'styled-components';

interface StyledRankProps {
  $rank: number;
}

export const StyledContainer = styled.div`
  position: relative;
  padding: 1rem;
  width: 32.5rem;
  height: auto;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.color.borderNormal};
  background: ${({ theme }) => theme.color.bgNormal};
`;

export const StyledTitleContainer = styled.div`
  padding: 0.3125rem 0.5rem;
  margin-bottom: 0.5rem;
`;

export const StyledTitle = styled.div`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.color.textPrimary};
  ${({ theme }) => theme.typo.subtitle3};
`;

export const StyledUpdateDate = styled.div`
  color: ${({ theme }) => theme.color.textTertiary};
  ${({ theme }) => theme.typo.caption2}
`;

export const StyledList = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: column;
  grid-column-gap: 0.5rem;
`;

export const StyledListItem = styled(ListItem)`
  padding: 0.625rem 0.75rem;
`;

export const StyledListItemRanking = styled.span<StyledRankProps>`
  color: ${(props) => (props.$rank < 4 ? '#8A2AC5' : props.theme.color.textTertiary)};

  // YDS 지정이 되어 있지 않아 임시로 작업했습니다.
  font-family: 'Spoqa Han Sans Neo';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
`;

export const StyledListItemKeyword = styled.div`
  width: 7.375rem;

  color: ${({ theme }) => theme.color.textPrimary};
  ${({ theme }) => theme.typo.body1};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledImage = styled.img`
  width: 10.3125rem;
  height: 6.875rem;

  position: absolute;
  right: 0.9375rem;
  top: -1.125rem;
`;
