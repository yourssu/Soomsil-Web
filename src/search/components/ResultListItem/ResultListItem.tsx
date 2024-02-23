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
} from './ResultListItem.style';

export const ResultListItem = ({
  title,
  link,
  content,
  date,
  thumbnail,
  favicon,
}: ResultListItemResponse) => {
  return (
    <StyledResultListItem>
      <div style={{ width: thumbnail.length < 5 ? '601px' : '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <StyledLinkImageWrap>
            <StyledLinkImage src={favicon} alt="favicon" />
          </StyledLinkImageWrap>
          <Spacing direction="horizontal" size={4} />
          <StyledLinkTitle>네이버 블로그</StyledLinkTitle>
          <Spacing direction="horizontal" size={4} />
          <StyledDate>·</StyledDate>
          <Spacing direction="horizontal" size={4} />
          <StyledDate>{date}</StyledDate>
        </div>
        <Spacing direction="vertical" size={12} />
        <StyledTitle href={link} $length={thumbnail.length}>
          {title}
        </StyledTitle>
        <Spacing direction="vertical" size={8} />
        <StyledContent $length={thumbnail.length}>{content}</StyledContent>
        {/* 썸네일 5개 이상인 경우 */}
        {thumbnail.length >= 5 && (
          <>
            <Spacing direction="vertical" size={12} />
            <StyledThumbnail $length={thumbnail.length}>
              {Array.from({ length: 5 }).map((_, index) => (
                <StyledThumbnailImage
                  $length={thumbnail.length}
                  src={thumbnail[index]}
                  alt="썸네일"
                ></StyledThumbnailImage>
              ))}
              <StyledThumbnailCountBox>{thumbnail.length}</StyledThumbnailCountBox>
            </StyledThumbnail>
          </>
        )}
      </div>
      {/* 썸네일 1~4개인 경우 */}
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
};
