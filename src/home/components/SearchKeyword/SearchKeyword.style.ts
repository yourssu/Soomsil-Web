import { ListItem } from '@yourssu/design-system-react';
import styled from 'styled-components';

interface StyledRankProps {
  $rank: number;
}

export const StyledContainer = styled.div`
  position: relative;
  padding: 0.9375rem;

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

  // YDS 지정이 되어 있지 않아 임시로 작업했습니다.
  font-family: 'Spoqa Han Sans Neo';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
`;

export const StyledUpdateDate = styled.div`
  height: 0.875rem;
  color: ${({ theme }) => theme.color.textTertiary};

  // YDS 지정이 되어 있지 않아 임시로 작업했습니다.
  font-family: 'Spoqa Han Sans Neo';
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

export const StyledListContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: column;
  grid-column-gap: 0.5rem;
`;

export const StyledListItem = styled(ListItem)`
  min-height: 2.9375rem;
  padding: 0.625rem 0.75rem;
`;

export const StyledRank = styled.span<StyledRankProps>`
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
  height: 1.6875rem;
  
  color: ${({ theme }) => theme.color.textPrimary}

  /* PC & Android/body18 */
  font-family: 'Spoqa Han Sans Neo';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;

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
