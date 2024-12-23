import { ImgNews } from '@/home/types/news.type';

import {
  StyledDateSpan,
  StyledImg,
  StyledArticleBox,
  StyledArticleItem,
  StyledArticleTitle,
} from './PhotoArticleList.style';

export const PhotoArticleList = ({ imgNews }: { imgNews: ImgNews[] }) => {
  return (
    <StyledArticleBox>
      {imgNews.map(({ thumbnail, title, date, pageUrl }) => (
        <StyledArticleItem key={title} href={pageUrl} target="_blank" rel="noopener noreferrer">
          <StyledImg src={thumbnail} alt={'ssu_news_img'} />
          <div>
            <StyledArticleTitle>{title}</StyledArticleTitle>
            <StyledDateSpan>입력 | {date}</StyledDateSpan>
          </div>
        </StyledArticleItem>
      ))}
    </StyledArticleBox>
  );
};
