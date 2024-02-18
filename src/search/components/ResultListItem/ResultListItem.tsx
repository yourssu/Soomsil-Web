import Spacing from '@/components/Spacing/Spacing';
import { ResultListItemResponse } from '@/search/types/ResultListItem.type';

import {
  StyledContent,
  StyledDate,
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
          <StyledLinkImage>
            <img width="100%" height="100%" src={favicon} alt="favicon" />
          </StyledLinkImage>
          <Spacing direction="horizontal" size={4} />
          <StyledLinkTitle>네이버 블로그</StyledLinkTitle>
          <Spacing direction="horizontal" size={4} />
          <StyledDate>·</StyledDate>
          <Spacing direction="horizontal" size={4} />
          <StyledDate>{date}</StyledDate>
        </div>
        <Spacing direction="vertical" size={12} />
        <StyledTitle href={link} length={thumbnail.length}>
          {title}
        </StyledTitle>
        <Spacing direction="vertical" size={8} />
        <StyledContent length={thumbnail.length}>{content}</StyledContent>
        {thumbnail.length >= 5 && (
          <>
            <Spacing direction="vertical" size={12} />
            <StyledThumbnail length={thumbnail.length}>
              <StyledThumbnailImage
                length={thumbnail.length}
                src={thumbnail[0]}
                alt="썸네일"
              ></StyledThumbnailImage>
              <Spacing direction="horizontal" size={2} />
              <StyledThumbnailImage
                length={thumbnail.length}
                src={thumbnail[1]}
                alt="썸네일"
              ></StyledThumbnailImage>
              <Spacing direction="horizontal" size={2} />
              <StyledThumbnailImage
                length={thumbnail.length}
                src={thumbnail[2]}
                alt="썸네일"
              ></StyledThumbnailImage>
              <Spacing direction="horizontal" size={2} />
              <StyledThumbnailImage
                length={thumbnail.length}
                src={thumbnail[3]}
                alt="썸네일"
              ></StyledThumbnailImage>
              <Spacing direction="horizontal" size={2} />
              <StyledThumbnailImage
                length={thumbnail.length}
                src={thumbnail[4]}
                alt="썸네일"
              ></StyledThumbnailImage>
              <StyledThumbnailCountBox>{thumbnail.length}</StyledThumbnailCountBox>
            </StyledThumbnail>
          </>
        )}
      </div>
      {thumbnail.length < 5 && (
        <StyledThumbnail length={thumbnail.length}>
          <StyledThumbnailImage
            length={thumbnail.length}
            src={thumbnail[0]}
            alt="썸네일"
          ></StyledThumbnailImage>
          <StyledThumbnailCountBox>{thumbnail.length}</StyledThumbnailCountBox>
        </StyledThumbnail>
      )}
    </StyledResultListItem>
  );
};
