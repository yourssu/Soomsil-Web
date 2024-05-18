import { Suspense, useEffect, useState } from 'react';

import { IcSearchLine, IconContext } from '@yourssu/design-system-react';
import { Link } from 'react-router-dom';

import RealTimeKeywordImage from '@/assets/realTimeKeyword.webp';
import {
  StyledContainer,
  StyledTitleContainer,
  StyledImage,
  StyledTitle,
  StyledUpdateDate,
  StyledList,
  StyledListItemRanking,
  StyledListItemKeyword,
  StyledListItem,
} from '@/search/components/RealTimeKeyword/RealTimeKeyword.style';
import { useGetRealTimeKeyword } from '@/search/hooks/useGetRealTimeKeyword';
import { formatDateTime } from '@/utils/formatDateTime';

export const RealTimeKeyword = () => {
  const { data } = useGetRealTimeKeyword();

  const [time, setTime] = useState<string>();

  useEffect(() => {
    setTime(formatDateTime(data.basedTime));
  }, [data]);

  return (
    <StyledContainer>
      <Suspense fallback={<StyledUpdateDate>연결 중입니다.</StyledUpdateDate>}>
        <StyledTitleContainer>
          <StyledTitle>
            숨쉬듯이
            <br />
            검색한 키워드
          </StyledTitle>
          <StyledUpdateDate>{`${time} 기준`}</StyledUpdateDate>
        </StyledTitleContainer>
        <StyledImage src={RealTimeKeywordImage} alt="뿌슝이" />
        <StyledList>
          {data.queries.map((value, index) => (
            <Link key={value.query} to={`/search?query=${value.query}`}>
              <StyledListItem
                key={value.query}
                leftIcon={
                  <StyledListItemRanking $rankingNumber={index + 1}>
                    {index + 1}
                  </StyledListItemRanking>
                }
                rightIcon={
                  <IconContext.Provider
                    value={{
                      color: '#8A2AC5',
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
