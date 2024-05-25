import { ListItem, Typo } from '@yourssu/design-system-react';
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

export const StyledListItem = styled(ListItem)`
  padding: 0.625rem 0.75rem;
  min-height: auto;

  .right-icon {
    height: 1.25rem;
    width: 1.25rem;
  }
`;

interface StyledRankProps {
  $rank: number;
}

export const StyledListItemRanking = styled.span<StyledRankProps>`
  color: ${({ $rank }) => ($rank < 4 ? '#8a2ac5' : '#8E9398')};
  ${({ theme }) => theme.typo.subtitle4};
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
