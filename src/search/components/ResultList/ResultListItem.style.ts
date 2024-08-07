import styled from 'styled-components';

import { RESULT_LIST_ITEM_THUMNAIL_LENGTH } from '@/search/constant';

export const StyledResultListItem = styled.section`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 50rem;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 0.063rem ${(props) => props.theme.color.borderNormal} solid;
  cursor: pointer;
`;

interface StyledContentProps {
  $length: number;
}

export const StyledContentWrap = styled.div<StyledContentProps>`
  width: ${(props) => (props.$length < RESULT_LIST_ITEM_THUMNAIL_LENGTH ? '37.563rem' : '100%')};
`;

export const StyledInformationWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const StyledLinkImageWrap = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.188rem;
  border-radius: 62.438rem;
  background-color: ${(props) => props.theme.color.bgRecomment};
  overflow: hidden;
`;

export const StyledLinkImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const StyledLinkTitle = styled.span`
  ${(props) => props.theme.typo.body1}
  color: ${(props) => props.theme.color.textSecondary};
`;

export const StyledDate = styled.span`
  ${(props) => props.theme.typo.body1}
  color: ${(props) => props.theme.color.textTertiary};
`;

interface StyledTitleProps {
  $length: number;
}

export const StyledTitle = styled.a<StyledTitleProps>`
  ${(props) => props.theme.typo.title3}
  width: 100%;
  height: fit-content;
  color: rgba(26, 13, 179, 1);
  word-wrap: break-word;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: ${(props) => (props.$length < RESULT_LIST_ITEM_THUMNAIL_LENGTH ? 1 : 2)};
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;

  &:hover {
    text-decoration: underline;
    color: rgba(26, 13, 179, 1);
  }
`;

interface StyledContentProps {
  $length: number;
}

export const StyledContent = styled.div<StyledContentProps>`
  ${(props) => props.theme.typo.body1}
  color: ${(props) => props.theme.color.textTertiary};
  width: 100%;
  height: ${(props) => (props.$length < RESULT_LIST_ITEM_THUMNAIL_LENGTH ? 4.688 : 3.25)}rem;
  word-wrap: break-word;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: ${(props) => (props.$length < RESULT_LIST_ITEM_THUMNAIL_LENGTH ? 3 : 2)};
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

interface StyledThumbnailProps {
  $length: number;
}

export const StyledThumbnail = styled.div<StyledThumbnailProps>`
  width: ${(props) => (props.$length < RESULT_LIST_ITEM_THUMNAIL_LENGTH ? '8.125rem' : '100%')};
  height: 8.125rem;
  align-self: flex-end;
  position: relative;
  border-radius: 0.75rem;
  overflow: hidden;
  display: flex;
  gap: 0.125rem;
`;

export const StyledThumbnailImage = styled.img<StyledThumbnailProps>`
  width: ${(props) => (props.$length < RESULT_LIST_ITEM_THUMNAIL_LENGTH ? '100%' : '20%')};
  height: 100%;
  align-self: flex-end;
  background: linear-gradient(
    0deg,
    rgba(212.91, 212.91, 212.91, 0.2) 0%,
    rgba(212.91, 212.91, 212.91, 0.2) 100%
  );
  aspect-ratio: ${(props) =>
    props.$length < RESULT_LIST_ITEM_THUMNAIL_LENGTH ? 'auto 130/130' : 'auto 148.8/130'};
  overflow: clip;
  overflow-clip-margin: content-box;
  object-fit: cover;
`;

export const StyledThumbnailCountBox = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 62.438rem;
  background-color: ${(props) => props.theme.color.dimThick};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.color.bgNormal};
  font-size: 0.75rem;
  position: absolute;
  bottom: 0.25rem;
  right: 0.25rem;
`;
