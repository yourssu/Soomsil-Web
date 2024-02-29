import { useEffect, useState } from 'react';

import { ListItem, IcSearchLine, IconContext } from '@yourssu/design-system-react';
import { useNavigate } from 'react-router-dom';

import RealTimeKeywordImage from '@/assets/realTimeKeyword.png';
import { useGetRealTimeKeyword } from '@/search/hooks/useGetRealTimeKeyword';

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

  const { data, isLoading } = useGetRealTimeKeyword();

  const [realTime, setRealTime] = useState<string>();

  const createTime = (basedTime: string) => {
    const dateObject = new Date(basedTime);
    const realTimeDate = {
      year: dateObject.getFullYear(),
      month: ('0' + (dateObject.getMonth() + 1)).slice(-2),
      day: ('0' + dateObject.getDate()).slice(-2),
      hour: ('0' + dateObject.getHours()).slice(-2),
      minute: ('0' + dateObject.getMinutes()).slice(-2),
    };
    return (
      realTimeDate.year +
      '.' +
      realTimeDate.month +
      '.' +
      realTimeDate.day +
      ' ' +
      realTimeDate.hour +
      ':' +
      realTimeDate.minute
    );
  };

  useEffect(() => {
    if (data !== undefined) {
      const realTime = createTime(data.basedTime);
      setRealTime(realTime);
    }
  }, [data]);

  const listOnclick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const queryKeyword = event.currentTarget.innerText.split('\n')[2];
    navigate(`?query=${queryKeyword}&page=1`);
  };

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledHeaderTextSection>
          <StyledHeaderTitle>
            숨쉬듯이
            <br />
            검색한 키워드
          </StyledHeaderTitle>
          {isLoading && <StyledHeaderTime>연결 중입니다</StyledHeaderTime>}
          {data && <StyledHeaderTime>{`${realTime} 기준`}</StyledHeaderTime>}
        </StyledHeaderTextSection>
        <StyledHeaderImageSection src={RealTimeKeywordImage} alt="뿌슝이" />
      </StyledHeader>
      <StyledList>
        {data?.querys.map((value, index) => {
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
              onClick={listOnclick}
            />
          );
        })}
      </StyledList>
    </StyledContainer>
  );
};
