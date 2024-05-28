import { Typo } from '@yourssu/design-system-react';
import styled from 'styled-components';

interface StyledContainerProps {
  $containerPadding: string;
  $containerWidth: string;
  $containerHeight: string;
}

export const StyledContainer = styled.div<StyledContainerProps>`
  position: relative;
  padding: ${({ $containerPadding }) => $containerPadding};
  width: ${({ $containerWidth }) => $containerWidth};
  height: ${({ $containerHeight }) => $containerHeight};
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.color.borderNormal};
  background: ${({ theme }) => theme.color.bgNormal};
`;

interface StyledTitleContainerProps {
  $titleContainerPadding: string;
  $titleContainerMarginBottom: string;
}

export const StyledTitleContainer = styled.div<StyledTitleContainerProps>`
  padding: ${({ $titleContainerPadding }) => $titleContainerPadding};
  margin-bottom: ${({ $titleContainerMarginBottom }) => $titleContainerMarginBottom};
`;

export const StyledTitle = styled.div`
  margin-bottom: 0.5rem;
  white-space: pre-wrap;
  color: ${({ theme }) => theme.color.textPrimary};
  ${({ theme }) => theme.typo.subtitle3};
`;

interface StyledUpdateDateProps {
  $updateDateTypo: Typo;
}

export const StyledUpdateDate = styled.div<StyledUpdateDateProps>`
  color: ${({ theme }) => theme.color.textTertiary};
  ${({ theme, $updateDateTypo }) => theme.typo[$updateDateTypo]};
`;

interface StyledListProps {
  $columnCount: number;
}

export const StyledList = styled.div<StyledListProps>`
  display: grid;
  grid-template-rows: ${({ $columnCount }) => `repeat(${10 / $columnCount}, 1fr)`};
  grid-template-columns: ${({ $columnCount }) => `repeat(${$columnCount}, 1fr)`};
  grid-auto-flow: column;
  grid-column-gap: 0.5rem;
`;

export const StyledListItem = styled.div`
  display: flex;
  padding: 0.625rem 0.75rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  background: ${({ theme }) => theme.color.bgNormal};
  &:hover {
    background: ${({ theme }) => theme.color.bgRecomment};
  }
`;

export const StyledListItemText = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`;

interface StyledRankProps {
  $rank: number;
}

export const StyledListItemRanking = styled.span<StyledRankProps>`
  color: ${({ $rank, theme }) => ($rank < 4 ? '#423FCC' : theme.color.textTertiary)};
  ${({ theme }) => theme.typo.subtitle4};
  width: 1.5rem;
`;

interface StyledListItemKeywordProps {
  $keywordWidth: string;
}

export const StyledListItemKeyword = styled.p<StyledListItemKeywordProps>`
  width: ${({ $keywordWidth }) => $keywordWidth};
  color: ${({ theme }) => theme.color.textPrimary};
  ${({ theme }) => theme.typo.body1};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

interface StyledImageProps {
  $imageWidth: string;
  $imageHeight: string;
  $imageTop: string;
  $imageRight: string;
}

export const StyledImage = styled.img<StyledImageProps>`
  width: ${({ $imageWidth }) => $imageWidth};
  height: ${({ $imageHeight }) => $imageHeight};

  position: absolute;
  right: ${({ $imageRight }) => $imageRight};
  top: ${({ $imageTop }) => $imageTop};
`;

export type RealTimeKeywordStyleProps = StyledContainerProps &
  StyledTitleContainerProps &
  StyledUpdateDateProps &
  StyledListProps &
  StyledListItemKeywordProps &
  StyledImageProps;
