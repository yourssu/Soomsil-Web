import styled from 'styled-components';

export const StyledResultListItem = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
  width: 50rem;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 0.063rem ${(props) => props.theme.color.borderNormal} solid;
  cursor: pointer;
`;

export const StyledContentWrap = styled.div<{ $isHorizontalLayout: boolean }>`
  width: ${({ $isHorizontalLayout }) => ($isHorizontalLayout ? '37.563rem' : '100%')};
  flex-shrink: 0;
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

export const StyledTitle = styled.a<{ $isVerticalLayout: boolean }>`
  ${(props) => props.theme.typo.title3}
  width: 100%;
  height: fit-content;
  color: rgba(26, 13, 179, 1);
  word-wrap: break-word;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: ${({ $isVerticalLayout }) => ($isVerticalLayout ? 2 : 1)};
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;

  &:hover {
    text-decoration: underline;
    color: rgba(26, 13, 179, 1);
  }
`;

export const StyledContent = styled.div<{ $isVerticalLayout: boolean }>`
  ${(props) => props.theme.typo.body1}
  color: ${(props) => props.theme.color.textTertiary};
  width: 100%;
  height: ${({ $isVerticalLayout }) => ($isVerticalLayout ? 3.25 : 4.688)}rem;
  word-wrap: break-word;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: ${({ $isVerticalLayout }) => ($isVerticalLayout ? 2 : 3)};
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

export const StyledThumbnail = styled.div<{ $isVerticalLayout: boolean }>`
  width: ${({ $isVerticalLayout }) => ($isVerticalLayout ? '100%' : '8.125rem')};
  height: 8.125rem;
  align-self: flex-end;
  position: relative;
  border-radius: 0.75rem;
  overflow: hidden;
  display: flex;
  gap: 0.125rem;
  flex-shrink: 0;
  margin-top: ${({ $isVerticalLayout }) => ($isVerticalLayout ? '12px' : '0')};
`;

export const StyledThumbnailImage = styled.img<{ $isVerticalLayout: boolean }>`
  width: ${({ $isVerticalLayout }) => ($isVerticalLayout ? '20%' : '100%')};
  height: 100%;
  align-self: flex-end;
  background: linear-gradient(
    0deg,
    rgba(212.91, 212.91, 212.91, 0.2) 0%,
    rgba(212.91, 212.91, 212.91, 0.2) 100%
  );
  aspect-ratio: ${({ $isVerticalLayout }) =>
    $isVerticalLayout ? 'auto 148.8/130' : 'auto 130/130'};
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
