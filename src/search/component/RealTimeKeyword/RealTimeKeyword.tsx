import { useEffect, useState } from 'react';

import { ListItem, IcSearchLine } from '@yourssu/design-system-react';
import { useNavigate } from 'react-router-dom';

import RealTimeKeywordImage from '@/assets/search/RealTimeKeyword.png';

import {
  StyledContainer,
  StyledHeader,
  StyledHeaderImageSection,
  StyledHeaderText1,
  StyledHeaderText2,
  StyledHeaderTextSection,
  StyledList,
  StyledListItemRanking,
  StyledListItemText,
} from './RealTimeKeyword.style';

interface RealTimeData {
  year: string;
  month: string;
  day: string;
  hour: string;
  min: string;
}

// Keyword 가져오는 쿼리 작성
export const RealTimeKeyword = () => {
  const navigate = useNavigate();

  const [realTime, setRealTime] = useState<RealTimeData>();

  useEffect(() => {
    const koreaTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' });
    const [date, time] = koreaTime.split(', ');
    const [month, day, year] = date.split('/');
    const [hour, min, _] = time.split(':');
    const [, AMPM] = _.split(' ');

    const setMonth = month.length === 1 ? '0' + month : month;
    const setDay = day.length === 1 ? '0' + day : day;
    const setMin = min.length === 1 ? '0' + min : min;

    const setHour = AMPM === 'PM' && Number(hour) !== 12 ? String(Number(hour) + 12) : '0' + hour;

    setRealTime({
      year: year,
      month: setMonth,
      day: setDay,
      hour: setHour,
      min: setMin,
    });
  }, []);

  // api 연동해서 가져와야 합니다. 현재는 임의의 데이터만 넣었습니다.
  const data = [
    '숭실대학교',
    '유어슈',
    '복학신청',
    '글로벌미디어학부',
    '뿌슝이',
    '로지',
    '예린',
    '혀니',
    '엘리아',
    '아 복학하기 너무 싫다',
  ];

  const listOnclick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const queryKeyword = event.currentTarget.innerText.split('\n')[2];
    navigate(`?query=${queryKeyword}&page=1`);
  };

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledHeaderTextSection>
          <StyledHeaderText1>
            숨쉬듯이
            <br />
            검색한 키워드
          </StyledHeaderText1>
          {realTime ? (
            <StyledHeaderText2>
              {realTime.year +
                '.' +
                realTime.month +
                '.' +
                realTime.day +
                ' ' +
                realTime.hour +
                ':' +
                realTime.min}{' '}
              기준
            </StyledHeaderText2>
          ) : null}
        </StyledHeaderTextSection>
        <StyledHeaderImageSection src={RealTimeKeywordImage} alt="뿌슝이" />
      </StyledHeader>
      <StyledList>
        {data.map((value, index) => {
          return (
            <ListItem
              leftIcon={
                <StyledListItemRanking
                  style={{
                    color: `${index + 1 < 4 ? '#8a2ac5' : '#8E9398'}`,
                  }}
                >
                  {index + 1}
                </StyledListItemRanking>
              }
              rightIcon={<IcSearchLine color={'#8A2AC5'} />}
              key={index}
              style={{
                padding: '12px',
              }}
              children={<StyledListItemText>{value}</StyledListItemText>}
              onClick={listOnclick}
            />
          );
        })}
      </StyledList>
    </StyledContainer>
  );
};
