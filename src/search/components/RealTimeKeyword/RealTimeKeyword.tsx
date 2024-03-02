import { Suspense, useEffect, useState } from 'react';

import { ListItem, IcSearchLine, IconContext } from '@yourssu/design-system-react';
import { useNavigate } from 'react-router-dom';

import RealTimeKeywordImage from '@/assets/realTimeKeyword.webp';
import { useGetRealTimeKeyword } from '@/search/hooks/useGetRealTimeKeyword';
import { formatDateTime } from '@/utils/formatDateTime';

import {
  StyledContainer,
  StyledHeader,
  StyledHeaderImageSection,
  StyledHeaderTitle,
  StyledHeaderTime,
  StyledHeaderTextSection,
  StyledList,
  StyledListItemRanking,
  StyledListItemText,
} from './RealTimeKeyword.style';

export const RealTimeKeyword = () => {
  const navigate = useNavigate();

  const { data } = useGetRealTimeKeyword();

  const [time, setTime] = useState<string>();

  useEffect(() => {
    setTime(formatDateTime(data.basedTime));
  }, [data]);

  const handleClickListItem = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const queryKeyword = event.currentTarget.innerText.split('\n')[2];
    navigate(`?query=${queryKeyword}`);
  };

  return (
    <StyledContainer>
      <Suspense fallback={<StyledHeaderTime>연결 중입니다.</StyledHeaderTime>}>
        <StyledHeader>
          <StyledHeaderTextSection>
            <StyledHeaderTitle>
              숨쉬듯이
              <br />
              검색한 키워드
            </StyledHeaderTitle>
            <StyledHeaderTime>{`${time} 기준`}</StyledHeaderTime>
          </StyledHeaderTextSection>
          <StyledHeaderImageSection src={RealTimeKeywordImage} alt="뿌슝이" />
        </StyledHeader>
        <StyledList>
          {data.querys.map((value, index) => {
            return (
              <ListItem
                key={value.query}
                leftIcon={
                  <StyledListItemRanking $rankingNumber={index + 1}>
                    {index + 1}
                  </StyledListItemRanking>
                }
                /**
                 * @수정사항 color 색상이 YDS에 없어서 HEX로 넣었습니다.
                 */
                rightIcon={
                  <IconContext.Provider
                    value={{
                      color: '#8A2AC5',
                    }}
                  >
                    <IcSearchLine />
                  </IconContext.Provider>
                }
                style={{
                  padding: '0.75rem',
                }}
                children={<StyledListItemText>{value.query}</StyledListItemText>}
                onClick={handleClickListItem}
              />
            );
          })}
        </StyledList>
      </Suspense>
    </StyledContainer>
  );
};
