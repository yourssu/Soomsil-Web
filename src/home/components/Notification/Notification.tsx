import { useEffect, useState } from 'react';

import { IcNoticeLine } from '@yourssu/design-system-react';

import {
  StyledContainer,
  StyledInnerContainer,
  StyledNotification,
  StyledNotificationContainer,
} from './Notification.style';

const Dummy = [
  '그거 아시나요?? 지금은 2월이라는 거? 당연함 2월임',
  '안녕하세요~~ 공지입니다.',
  '가나다라마바사아자차카타파하갸냐댜랴먀뱌샤야쟈챠캬탸퍄햐거너더러머버서어저처커터퍼허겨녀뎌려며벼셔여져쳐켜텨펴혀',
  '이거슨 테스트여',
];

export const Notification = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');

    const intervalId = setInterval(() => {
      if (prev) prev.style.cssText = 'opacity: 0; transition: opacity 0.25s ease 0s;';
      if (next)
        next.style.cssText = 'transform: translateY(-26px); transition: transform 0.7s ease 0s;';

      setTimeout(() => {
        goToNextTerm();
        if (prev) prev.style.cssText = 'opacity: 1';
        if (next) next.style.cssText = '';
      }, 1000);
    }, 2500);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const goToNextTerm = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Dummy.length);
  };

  return (
    <StyledContainer>
      <StyledInnerContainer>
        <IcNoticeLine size="2.25rem" />
        <StyledNotificationContainer>
          <StyledNotification id="prev">{Dummy[currentIndex]}</StyledNotification>
          <StyledNotification id="next">
            {Dummy[(currentIndex + 1) % Dummy.length]}
          </StyledNotification>
        </StyledNotificationContainer>
      </StyledInnerContainer>
    </StyledContainer>
  );
};
