import styled from 'styled-components';

export const StyledResultListItem = styled.section`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 50rem;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 0.063rem rgba(16, 17, 18, 0.1) solid;
`;

export const StyledLinkImage = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.188rem;
  border-radius: 62.438rem;
  background-color: #f8f9fa;
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
  length: number;
}

export const StyledTitle = styled.a<StyledTitleProps>`
  ${(props) => props.theme.typo.title3}
  width: 100%;
  height: 1.938rem;
  color: #1a0db3;
  word-wrap: break-word;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: ${(props) => (props.length < 5 ? 1 : 2)};
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;

  &:hover {
    text-decoration: underline;
    color: #1a0db3;
  }
`;

interface StyledContentProps {
  length: number;
}

export const StyledContent = styled.div<StyledContentProps>`
  ${(props) => props.theme.typo.body1}
  color: ${(props) => props.theme.color.textTertiary};
  width: 100%;
  height: ${(props) => (props.length < 5 ? 4.688 : 3.25)}rem;
  word-wrap: break-word;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: ${(props) => (props.length < 5 ? 3 : 2)};
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

interface StyledThumbnailProps {
  length: number;
}

export const StyledThumbnail = styled.div<StyledThumbnailProps>`
  width: ${(props) => (props.length < 5 ? '8.125rem' : '100%')};
  height: 130px;
  align-self: flex-end;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
`;

export const StyledThumbnailImage = styled.img<StyledThumbnailProps>`
  width: ${(props) => (props.length < 5 ? '100%' : '20%')};
  height: 100%;
  align-self: flex-end;
  background: linear-gradient(
    0deg,
    rgba(212.91, 212.91, 212.91, 0.2) 0%,
    rgba(212.91, 212.91, 212.91, 0.2) 100%
  );
  aspect-ratio: ${(props) => (props.length < 5 ? 'auto 130/130' : 'auto 148.8/130')};
  overflow: clip;
  overflow-clip-margin: content-box;
  object-fit: cover;
`;

export const StyledThumbnailCountBox = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 62.438rem;
  background-color: rgba(37, 39, 41, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 0.75rem;
  position: absolute;
  bottom: 0.25rem;
  right: 0.25rem;
`;
