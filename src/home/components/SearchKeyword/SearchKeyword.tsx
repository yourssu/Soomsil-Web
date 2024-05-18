import { Suspense } from 'react';

import { IcSearchLine, IconContext } from '@yourssu/design-system-react';
import { Link } from 'react-router-dom';

import RealTimeKeywordImage from '@/assets/realTimeKeyword.webp';
import {
  StyledContainer,
  StyledImage,
  StyledList,
  StyledListItemKeyword,
  StyledListItemRanking,
  StyledTitle,
  StyledTitleContainer,
  StyledUpdateDate,
  StyledListItem,
} from '@/home/components/SearchKeyword/SearchKeyword.style';
import { useGetRealTimeKeyword } from '@/search/hooks/useGetRealTimeKeyword';
import { formatDateTime } from '@/utils/formatDateTime';

export const SearchKeyword = () => {
  const { data } = useGetRealTimeKeyword();

  return (
    <StyledContainer>
      <Suspense fallback={<StyledUpdateDate>연결 중입니다.</StyledUpdateDate>}>
        <StyledTitleContainer>
          <StyledTitle>
            숨쉬듯이
            <br />
            검색된 키워드
          </StyledTitle>
          <StyledUpdateDate>{formatDateTime(data.basedTime)} 기준</StyledUpdateDate>
        </StyledTitleContainer>
        <StyledImage src={RealTimeKeywordImage} alt="뿌슝이" />
        <StyledList>
          {data.queries.map((value, index) => (
            <Link key={value.query} to={`/search?query=${value.query}`}>
              <StyledListItem
                key={value.query}
                leftIcon={
                  <StyledListItemRanking $rank={index + 1}>{index + 1}</StyledListItemRanking>
                }
                rightIcon={
                  <IconContext.Provider
                    value={{
                      color: '#8A2AC5',
                      size: '1.25rem',
                    }}
                  >
                    <IcSearchLine />
                  </IconContext.Provider>
                }
                children={<StyledListItemKeyword>{value.query}</StyledListItemKeyword>}
              />
            </Link>
          ))}
        </StyledList>
      </Suspense>
    </StyledContainer>
  );
};
