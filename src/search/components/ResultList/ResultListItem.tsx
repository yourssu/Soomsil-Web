import { forwardRef } from 'react';

import { Spacing } from '@/components/Spacing/Spacing';
import { ResultListItemResponse } from '@/search/types/ResultListItem.type';
import { onErrorImg } from '@/search/utils/onErrorImg';

import {
  StyledContent,
  StyledDate,
  StyledLinkImageWrap,
  StyledLinkImage,
  StyledLinkTitle,
  StyledResultListItem,
  StyledThumbnail,
  StyledThumbnailCountBox,
  StyledThumbnailImage,
  StyledTitle,
  StyledContentWrap,
  StyledInformationWrap,
} from './ResultListItem.style';

interface ResultListItemProps
  extends Pick<React.ComponentProps<'div'>, 'onClick'>,
    ResultListItemResponse {}

export const ResultListItem = forwardRef<HTMLDivElement, ResultListItemProps>(
  ({ title, content, date, thumbnail, favicon, source, onClick }, ref) => {
    return (
      <StyledResultListItem ref={ref} onClick={onClick}>
        <StyledContentWrap $length={thumbnail.length}>
          <StyledInformationWrap>
            <StyledLinkImageWrap>
              <StyledLinkImage src={favicon || '/'} alt="favicon" onError={onErrorImg} />
            </StyledLinkImageWrap>
            <Spacing direction="horizontal" size={4} />
            <StyledLinkTitle>{source}</StyledLinkTitle>
            <Spacing direction="horizontal" size={4} />
            <StyledDate>·</StyledDate>
            <Spacing direction="horizontal" size={4} />
            <StyledDate>{date}</StyledDate>
          </StyledInformationWrap>
          <Spacing direction="vertical" size={12} />
          <StyledTitle $length={thumbnail.length}>{title}</StyledTitle>
          <Spacing direction="vertical" size={8} />
          <StyledContent $length={thumbnail.length}>{content}</StyledContent>
          {thumbnail.length >= 5 && (
            <>
              <Spacing direction="vertical" size={12} />
              <StyledThumbnail $length={thumbnail.length}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <StyledThumbnailImage
                    key={thumbnail[index]}
                    $length={thumbnail.length}
                    src={thumbnail[index] || '/'}
                    alt="썸네일"
                    onError={onErrorImg}
                  ></StyledThumbnailImage>
                ))}
                <StyledThumbnailCountBox>{thumbnail.length}</StyledThumbnailCountBox>
              </StyledThumbnail>
            </>
          )}
        </StyledContentWrap>
        {thumbnail.length < 5 && (
          <StyledThumbnail $length={thumbnail.length}>
            <StyledThumbnailImage
              $length={thumbnail.length}
              src={thumbnail[0] || '/'}
              alt="썸네일"
              onError={onErrorImg}
            ></StyledThumbnailImage>
            <StyledThumbnailCountBox>{thumbnail.length}</StyledThumbnailCountBox>
          </StyledThumbnail>
        )}
      </StyledResultListItem>
    );
  }
);
