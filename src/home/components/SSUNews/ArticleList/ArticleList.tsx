import { TextNews } from '@/home/types/news.type';

import { StyledArticleItem, StyledArticleTitle, StyledDateSpan } from './ArticleList.style';

export const ArticleList = ({ textNews }: { textNews: TextNews[] }) => {
  return (
    <div>
      {textNews.map(({ title, date, pageUrl }) => (
        <StyledArticleItem key={title} href={pageUrl} target="_blank" rel="noopener noreferrer">
          <StyledArticleTitle>{title}</StyledArticleTitle>
          <StyledDateSpan>{date}</StyledDateSpan>
        </StyledArticleItem>
      ))}
    </div>
  );
};
