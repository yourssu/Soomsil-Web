import { IcSearchLine, IconContext } from '@yourssu/design-system-react';
import { Link } from 'react-router-dom';

import RealTimeKeywordImage from '@/assets/realTimeKeyword.png';

import {
  StyledContainer,
  StyledImage,
  StyledListContainer,
  StyledListItem,
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
          <Link key={keyword} to={`/search?keyword=${keyword}`}>
            <StyledListItem
              leftIcon={<StyledRank $rank={index + 1}>{index + 1}</StyledRank>}
              rightIcon={
                <IconContext.Provider
                  value={{
                    color: '#8A2AC5',
                    width: '1.25rem',
                  }}
                >
                  <IcSearchLine />
                </IconContext.Provider>
              }
              width="15rem"
            >
              <StyledListItemKeyword>{keyword}</StyledListItemKeyword>
            </StyledListItem>
          </Link>
        ))}
      </StyledListContainer>
    </StyledContainer>
  );
};

export default SearchKeyword;
