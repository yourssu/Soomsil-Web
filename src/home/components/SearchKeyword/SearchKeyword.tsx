import { Suspense } from 'react';

import { IcSearchLine, IconContext } from '@yourssu/design-system-react';
import { Link } from 'react-router-dom';

import RealTimeKeywordImage from '@/assets/realTimeKeyword.webp';
import { useGetRealTimeKeyword } from '@/search/hooks/useGetRealTimeKeyword';
import { formatDateTime } from '@/utils/formatDateTime';

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

export const SearchKeyword = () => {
  const { data } = useGetRealTimeKeyword();

  return (
    <StyledContainer>
      <Suspense fallback={<StyledUpdateDate>연결 중입니다.</StyledUpdateDate>}></Suspense>
      <StyledTitleContainer>
        <StyledTitle>
          숨쉬듯이
          <br />
          검색된 키워드
        </StyledTitle>
        <StyledUpdateDate>{formatDateTime(data.basedTime)} 기준</StyledUpdateDate>
      </StyledTitleContainer>
      <StyledImage src={RealTimeKeywordImage} alt="뿌슝이" />
      <StyledListContainer>
        {data.querys.map((value, index) => (
          <Link key={value.query} to={`/search?query=${value.query}`}>
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
              <StyledListItemKeyword>{value.query}</StyledListItemKeyword>
            </StyledListItem>
          </Link>
        ))}
      </StyledListContainer>
    </StyledContainer>
  );
};
