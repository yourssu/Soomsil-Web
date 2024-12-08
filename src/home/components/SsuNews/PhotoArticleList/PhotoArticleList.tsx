import {
  StyledDateSpan,
  StyledImg,
  StyledArticleBox,
  StyledArticleItem,
  StyledArticleTitle,
} from './PhotoArticleList.style';
const PhotoDummy = [
  {
    img: '/',
    title: '제 16대 총장 선임, 본교 구성원에게 묻다',
    date: '2024.12.08',
  },
  {
    img: '/',
    title: '제 16대 총장 선임, 본교 구성원에게 묻다',
    date: '2024.12.08',
  },
];

export const PhotoArticleList = () => {
  return (
    <StyledArticleBox>
      {PhotoDummy.map(({ img, title, date }) => (
        <StyledArticleItem>
          <StyledImg src={img} />
          <div>
            <StyledArticleTitle>{title}</StyledArticleTitle>
            <StyledDateSpan>입력 | {date}</StyledDateSpan>
          </div>
        </StyledArticleItem>
      ))}
    </StyledArticleBox>
  );
};
