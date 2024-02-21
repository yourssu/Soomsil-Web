import { useRef, useState } from 'react';

import { IcNoticeLine } from '@yourssu/design-system-react';

import { useInterval } from '@/home/hooks/useInterval';

import {
  StyledContainer,
  StyledInnerContainer,
  StyledNotification,
  StyledNotificationArray,
  StyledNotificationContainer,
} from './Notification.style';

const Dummy = [
  '그거 아시나요?? 지금은 2월이라는 거? 당연함 2월임',
  '안녕하세요~~ 공지입니다.',
  '가나다라마바사아자차카타파하갸냐댜랴먀뱌샤야쟈챠캬탸퍄햐거너더러머버서어저처커터퍼허겨녀뎌려며벼셔여져쳐켜텨펴혀',
  '이거슨 테스트여',
];

export const Notification = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [activeTransition, setActiveTransition] = useState(true);
  const slideRef = useRef<HTMLDivElement>(null);
  const notificationArray = [Dummy[Dummy.length - 1], ...Dummy, Dummy[0]];

  useInterval(() => setCurrentIndex((prev) => prev + 1), 5000);

  const InfiniteSlideHandler = (nextIndex: number) => {
    setTimeout(() => {
      if (slideRef.current) {
        setActiveTransition(false);
      }
      setCurrentIndex(nextIndex);
      setTimeout(() => {
        if (slideRef.current) {
          setActiveTransition(true);
        }
      }, 100);
    }, 500);
  };

  if (currentIndex === notificationArray.length - 1) {
    InfiniteSlideHandler(1);
  }

  if (currentIndex === 0) {
    InfiniteSlideHandler(Dummy.length);
  }

  return (
    <StyledContainer>
      <StyledInnerContainer>
        <IcNoticeLine size="2.25rem" />
        <StyledNotificationContainer>
          <StyledNotificationArray
            ref={slideRef}
            $length={notificationArray.length}
            $currentIndex={currentIndex}
            $active={activeTransition}
          >
            {notificationArray.map((notification, index) => (
              <StyledNotification key={index}>{notification}</StyledNotification>
            ))}
          </StyledNotificationArray>
        </StyledNotificationContainer>
      </StyledInnerContainer>
    </StyledContainer>
  );
};
