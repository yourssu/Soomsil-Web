import { StyledArticleItem, StyledArticleTitle, StyledDateSpan } from './ArticleList.style';

const ListDummy = [
  {
    title: '제 16대 총장 선임, 본교 구성원에게 묻다',
    date: '2024.12.08',
  },
  {
    title: '제 16대 총장 선임, 본교 구성원에게 묻다 제 16대 총장 선임, 본교 구성원에게 묻다',
    date: '2024.12.08',
  },
  {
    title: '제 16대 총장 선임, 본교 구성원에게 묻다',
    date: '2024.12.08',
  },
  {
    title: '제 16대 총장 선임, 본교 구성원에게 묻다',
    date: '2024.12.08',
  },
  {
    title: '제 16대 총장 선임, 본교 구성원에게 묻다',
    date: '2024.12.08',
  },
  {
    title: '제 16대 총장 선임, 본교 구성원에게 묻다',
    date: '2024.12.08',
  },
];

export const ArticleList = () => {
  return (
    <div>
      {ListDummy.map(({ title, date }) => (
        <StyledArticleItem>
          <StyledArticleTitle>{title}</StyledArticleTitle>
          <StyledDateSpan>{date}</StyledDateSpan>
        </StyledArticleItem>
      ))}
    </div>
  );
};
