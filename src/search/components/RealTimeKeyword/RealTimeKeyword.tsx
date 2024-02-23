import { useEffect, useState } from 'react';

import { ListItem, IcSearchLine, IconContext } from '@yourssu/design-system-react';
import { useNavigate } from 'react-router-dom';

import RealTimeKeywordImage from '@/assets/realTimeKeyword.png';

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

interface RealTimeData {
  year: string;
  month: string;
  day: string;
  hour: string;
  min: string;
}

export const RealTimeKeyword = () => {
  const navigate = useNavigate();

  const [realTime, setRealTime] = useState<RealTimeData>();

  const createTime = () => {
    const koreaTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' });
    const [date, time] = koreaTime.split(', ');
    const [month, day, year] = date.split('/');
    const [hour, min, _] = time.split(':');
    const [, AMPM] = _.split(' ');

    const setMonth = month.padStart(2, '0');
    const setDay = day.padStart(2, '0');
    const setMin = min.padStart(2, '0');

    const setHour =
      AMPM === 'PM' && Number(hour) !== 12
        ? String(Number(hour) + 12)
        : hour.length === 2
          ? hour
          : '0' + hour;

    setRealTime({
      year: year,
      month: setMonth,
      day: setDay,
      hour: setHour,
      min: setMin,
    });
  };

  useEffect(() => {
    createTime();
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
          <StyledHeaderTitle>
            숨쉬듯이
            <br />
            검색한 키워드
          </StyledHeaderTitle>
          {realTime ? (
            <StyledHeaderTime>
              {`${realTime.year}.${realTime.month}.${realTime.day} ${realTime.hour}:${realTime.min} 기준`}
            </StyledHeaderTime>
          ) : null}
        </StyledHeaderTextSection>
        <StyledHeaderImageSection src={RealTimeKeywordImage} alt="뿌슝이" />
      </StyledHeader>
      <StyledList>
        {data.map((value, index) => {
          return (
            <ListItem
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
              key={value}
              style={{
                padding: '0.75rem',
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
