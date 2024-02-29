import { forwardRef } from 'react';

import Spacing from '@/components/Spacing/Spacing';
import { ResultListItemResponse } from '@/search/types/ResultListItem.type';

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

export const ResultListItem = forwardRef<HTMLDivElement, ResultListItemResponse>(
  ({ title, link, content, date, thumbnail, favicon }, ref) => {
    return (
      <StyledResultListItem ref={ref}>
        <StyledContentWrap $length={thumbnail.length}>
          <StyledInformationWrap>
            <StyledLinkImageWrap>
              <StyledLinkImage src={favicon} alt="favicon" />
            </StyledLinkImageWrap>
            <Spacing direction="horizontal" size={4} />
            <StyledLinkTitle>네이버 블로그</StyledLinkTitle>
            <Spacing direction="horizontal" size={4} />
            <StyledDate>·</StyledDate>
            <Spacing direction="horizontal" size={4} />
            <StyledDate>{date}</StyledDate>
          </StyledInformationWrap>
          <Spacing direction="vertical" size={12} />
          <StyledTitle href={link} $length={thumbnail.length}>
            {title}
          </StyledTitle>
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
                    src={thumbnail[index]}
                    alt="썸네일"
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
              src={thumbnail[0]}
              alt="썸네일"
            ></StyledThumbnailImage>
            <StyledThumbnailCountBox>{thumbnail.length}</StyledThumbnailCountBox>
          </StyledThumbnail>
        )}
      </StyledResultListItem>
    );
  }
);
