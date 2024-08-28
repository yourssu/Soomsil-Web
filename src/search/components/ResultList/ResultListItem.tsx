import { forwardRef } from 'react';

import { Spacing } from '@/components/Spacing/Spacing';
import { RESULT_LIST_ITEM_THUMBNAIL_LENGTH } from '@/search/constant';
import { ResultListItemResponse } from '@/search/types/ResultListItem.type';
import { onErrorImg } from '@/search/utils/onErrorImg';

import {
  StyledContent,
  StyledContentWrap,
  StyledDate,
  StyledDomain,
  StyledInformationWrap,
  StyledLinkImage,
  StyledLinkImageWrap,
  StyledLinkTitle,
  StyledResultListItem,
  StyledThumbnail,
  StyledThumbnailCountBox,
  StyledThumbnailImage,
  StyledTitle,
} from './ResultListItem.style';

interface ResultListItemProps
  extends Pick<React.ComponentProps<'div'>, 'onClick'>,
    ResultListItemResponse {
  domain?: string;
}

export const ResultListItem = forwardRef<HTMLDivElement, ResultListItemProps>(
  ({ title, content, date, thumbnail, favicon, source, domain, onClick }, ref) => {
    const isVerticalLayout = thumbnail.length >= RESULT_LIST_ITEM_THUMBNAIL_LENGTH;
    const isHorizontalLayout = !isVerticalLayout && thumbnail.length > 0;
    const handleDomainClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (domain) {
        window.open(domain);
      }
    };

    return (
      <StyledResultListItem ref={ref} onClick={onClick}>
        <StyledContentWrap $isHorizontalLayout={isHorizontalLayout}>
          <StyledInformationWrap>
            <StyledDomain onClick={handleDomainClick}>
              <StyledLinkImageWrap>
                <StyledLinkImage src={favicon || '/'} alt="favicon" onError={onErrorImg} />
              </StyledLinkImageWrap>
              <Spacing direction="horizontal" size={4} />
              <StyledLinkTitle>{source}</StyledLinkTitle>
            </StyledDomain>
            <Spacing direction="horizontal" size={4} />
            <StyledDate>·</StyledDate>
            <Spacing direction="horizontal" size={4} />
            <StyledDate>{date}</StyledDate>
          </StyledInformationWrap>
          <Spacing direction="vertical" size={12} />
          <StyledTitle $isVerticalLayout={isVerticalLayout}>{title}</StyledTitle>
          <Spacing direction="vertical" size={8} />
          <StyledContent $isVerticalLayout={isVerticalLayout}>{content}</StyledContent>
        </StyledContentWrap>
        {isHorizontalLayout && (
          <StyledThumbnail $isVerticalLayout={isVerticalLayout}>
            <StyledThumbnailImage
              $isVerticalLayout={isVerticalLayout}
              src={thumbnail[0] || '/'}
              alt="썸네일"
              onError={onErrorImg}
            ></StyledThumbnailImage>
            <StyledThumbnailCountBox>{thumbnail.length}</StyledThumbnailCountBox>
          </StyledThumbnail>
        )}
        {isVerticalLayout && (
          <StyledThumbnail $isVerticalLayout={isVerticalLayout}>
            {Array.from({ length: 5 }).map((_, index) => (
              <StyledThumbnailImage
                key={thumbnail[index]}
                $isVerticalLayout={isVerticalLayout}
                src={thumbnail[index] || '/'}
                alt="썸네일"
                onError={onErrorImg}
              ></StyledThumbnailImage>
            ))}
            <StyledThumbnailCountBox>{thumbnail.length}</StyledThumbnailCountBox>
          </StyledThumbnail>
        )}
      </StyledResultListItem>
    );
  }
);
