import { ListItem, Typo } from '@yourssu/design-system-react';
import styled from 'styled-components';

interface StyledContainerProps {
  containerPadding: string;
  containerWidth: string;
  containerHeight: string;
}
export const StyledContainer = styled.div<StyledContainerProps>`
  position: relative;
  padding: ${(prop: StyledContainerProps) => prop.containerPadding};
  width: ${(prop: StyledContainerProps) => prop.containerWidth};
  height: ${(prop: StyledContainerProps) => prop.containerHeight};
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.color.borderNormal};
  background: ${({ theme }) => theme.color.bgNormal};
`;

interface StyledTitleContainerProps {
  titleContainerPadding: string;
  titleContainerMarginBottom: string;
}

export const StyledTitleContainer = styled.div<StyledTitleContainerProps>`
  padding: ${(prop: StyledTitleContainerProps) => prop.titleContainerPadding};
  margin-bottom: ${(prop: StyledTitleContainerProps) => prop.titleContainerMarginBottom};
`;

export const StyledTitle = styled.div`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.color.textPrimary};
  ${({ theme }) => theme.typo.subtitle3};
`;

interface StyledUpdateDateProps {
  updateDateTypo: Typo;
}

export const StyledUpdateDate = styled.div<StyledUpdateDateProps>`
  color: ${({ theme }) => theme.color.textTertiary};
  ${({ theme, updateDateTypo }) => theme.typo[updateDateTypo]};
`;

interface StyledListProps {
  columnCount: number;
}

export const StyledList = styled.div<StyledListProps>`
  display: grid;
  grid-template-rows: ${(props) => `repeat(${10 / props.columnCount}, 1fr)`};
  grid-template-columns: ${(props) => `repeat(${props.columnCount}, 1fr)`};
  grid-auto-flow: column;
  grid-column-gap: 0.5rem;
`;

export const StyledListItem = styled(ListItem)`
  padding: 0.625rem 0.75rem;
`;

interface StyledRankProps {
  $rank: number;
}

export const StyledListItemRanking = styled.span<StyledRankProps>`
  color: ${(prop) => (prop.$rank < 4 ? '#8a2ac5' : '#8E9398')};
  font-family: 'Spoqa Han Sans Neo';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
`;

interface StyledListItemKeywordProps {
  keywordWidth: string;
}

export const StyledListItemKeyword = styled.p<StyledListItemKeywordProps>`
  width: ${(prop: StyledListItemKeywordProps) => prop.keywordWidth};
  color: ${({ theme }) => theme.color.textPrimary};
  ${({ theme }) => theme.typo.body1};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

interface StyledImageProps {
  imageWidth: string;
  imageHeight: string;
  imageTop: string;
  imageRight: string;
}

export const StyledImage = styled.img<StyledImageProps>`
  width: ${(prop: StyledImageProps) => prop.imageWidth};
  height: ${(prop: StyledImageProps) => prop.imageHeight};

  position: absolute;
  right: ${(prop: StyledImageProps) => prop.imageRight};
  top: ${(prop: StyledImageProps) => prop.imageTop};
`;

export type RealTimeKeywordStyleProps = StyledContainerProps &
  StyledTitleContainerProps &
  StyledUpdateDateProps &
  StyledListProps &
  StyledListItemKeywordProps &
  StyledImageProps;
