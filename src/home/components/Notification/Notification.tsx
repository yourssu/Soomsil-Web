import { Suspense, useRef, useState } from 'react';

import { IcNoticeLine } from '@yourssu/design-system-react';
import { ErrorBoundary } from 'react-error-boundary';

import { useGetAnnouncement } from '@/home/hooks/useGetAnnouncement';
import { useInterval } from '@/hooks/useInterval';

import {
  StyledContainer,
  StyledInnerContainer,
  StyledNotification,
  StyledNotificationArray,
  StyledNotificationContainer,
} from './Notification.style';

const NotificationContent = () => {
  const { data: announcements } = useGetAnnouncement();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTransition, setActiveTransition] = useState(true);
  const slideRef = useRef<HTMLDivElement>(null);

  const notificationArray =
    announcements.length > 0
      ? [...announcements, announcements[0]].map((announcement, index) => ({
          id: index + 1,
          notification: announcement.title,
        }))
      : [];

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
    InfiniteSlideHandler(0);
  }

  return (
    <StyledNotificationContainer>
      {announcements.length === 0 ? (
        <StyledNotification>공지사항이 없습니다.</StyledNotification>
      ) : (
        <StyledNotificationArray
          ref={slideRef}
          $length={notificationArray.length}
          $currentIndex={currentIndex}
          $active={activeTransition}
        >
          {notificationArray.map((item) => (
            <StyledNotification key={item.id}>{item.notification}</StyledNotification>
          ))}
        </StyledNotificationArray>
      )}
    </StyledNotificationContainer>
  );
};

export const Notification = () => {
  return (
    <StyledContainer>
      <StyledInnerContainer>
        <IcNoticeLine size="2.25rem" />
        <ErrorBoundary
          fallbackRender={({ error }) => (
            <StyledNotification>Error: {error.message}</StyledNotification>
          )}
        >
          <Suspense fallback={<StyledNotification>로딩중...</StyledNotification>}>
            <NotificationContent />
          </Suspense>
        </ErrorBoundary>
      </StyledInnerContainer>
    </StyledContainer>
  );
};
