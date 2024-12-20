import { useGetNews } from '@/home/hooks/useGetNews';

import { ArticleList } from './ArticleList/ArticleList';
import { PhotoArticleList } from './PhotoArticleList/PhotoArticleList';
import {
  StyledArticleSection,
  StyledContainer,
  StyledAnchor,
  StyledTitle,
  StyledTitleSection,
} from './SSUNews.style';

const SSU_NEWS_LINK = 'https://www.ssunews.net/';

export const SSUNews = () => {
  const { data: news } = useGetNews();

  return (
    <StyledContainer>
      <StyledTitleSection>
        <StyledTitle>
          숭대시보로 알아보는 <span>교내소식</span>
        </StyledTitle>
        <StyledAnchor href={SSU_NEWS_LINK} target="_blank" rel="noopener noreferrer">
          전체보기
        </StyledAnchor>
      </StyledTitleSection>
      <StyledArticleSection>
        <PhotoArticleList imgNews={news.imgNews} />
        <ArticleList textNews={news.textNews} />
      </StyledArticleSection>
    </StyledContainer>
  );
};
