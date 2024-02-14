import { ResultListItemResponse } from '../../types/ResultListItem.type';
import Spacing from '../Spacing';

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

const ResultListItem = ({ title, link, content, date, thumbnail }: ResultListItemResponse) => {
  return (
    <StyledResultListItem>
      <div style={{ width: thumbnail.length < 5 ? '601px' : '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          {/* 백엔드 수정요청 - 링크 이름 및 사진 */}
          <StyledLinkImage>
            <img
              width="100%"
              height="100%"
              src={
                'data:image/jpeg;base64,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'
              }
            />
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

export default ResultListItem;
