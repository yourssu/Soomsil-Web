import { ListItem, IcSearchLine, IconContext } from '@yourssu/design-system-react';

import RealTimeKeywordImage from '@/assets/realTimeKeyword.png';

import {
  StyledContainer,
  StyledImage,
  StyledListContainer,
  StyledListItemKeyword,
  StyledRank,
  StyledTitle,
  StyledTitleContainer,
  StyledUpdateDate,
} from './SearchKeyword.style';

interface SearchKeywordProps {
  keywords: string[];
  date: string;
}

const SearchKeyword = ({ keywords, date }: SearchKeywordProps) => {
  return (
    <StyledContainer>
      <StyledTitleContainer>
        <StyledTitle>
          숨쉬듯이
          <br />
          검색된 키워드
        </StyledTitle>
        <StyledUpdateDate>{date} 기준</StyledUpdateDate>
      </StyledTitleContainer>
      <StyledImage src={RealTimeKeywordImage} alt="뿌슝이" />
      <StyledListContainer>
        {keywords.map((keyword, index) => (
          <ListItem
            key={keyword}
            leftIcon={<StyledRank $rank={index + 1}>{index + 1}</StyledRank>}
            rightIcon={
              <IconContext.Provider
                value={{
                  color: '#8A2AC5',
                }}
              >
                <IcSearchLine />
              </IconContext.Provider>
            }
            width="15rem"
          >
            <StyledListItemKeyword>{keyword}</StyledListItemKeyword>
          </ListItem>
        ))}
      </StyledListContainer>
    </StyledContainer>
  );
};

export default SearchKeyword;
