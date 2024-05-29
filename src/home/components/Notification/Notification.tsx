import { useRef, useState } from 'react';

import { IcNoticeLine } from '@yourssu/design-system-react';

import { useGetAnnouncement } from '@/home/hooks/useGetAnnouncement';
import { useInterval } from '@/hooks/useInterval';

import {
  StyledContainer,
  StyledInnerContainer,
  StyledNotification,
  StyledNotificationArray,
  StyledNotificationContainer,
} from './Notification.style';

export const Notification = () => {
  const { data, isLoading, isError, error } = useGetAnnouncement();
  const [currentIndex, setCurrentIndex] = useState(1);
  const [activeTransition, setActiveTransition] = useState(true);
  const slideRef = useRef<HTMLDivElement>(null);

  const announcements = data?.announcementList ?? [];

  const notificationArray =
    announcements.length > 0
      ? [announcements[announcements.length - 1], ...announcements, announcements[0]].map(
          (announcement, index) => ({
            id: index + 1,
            notification: announcement.title,
          })
        )
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
    InfiniteSlideHandler(1);
  }

  if (currentIndex === 0) {
    InfiniteSlideHandler(announcements.length);
  }

  return (
    <StyledContainer>
      <StyledInnerContainer>
        <IcNoticeLine size="2.25rem" />
        <StyledNotificationContainer>
          {isLoading ? (
            <StyledNotification>로딩중...</StyledNotification>
          ) : isError ? (
            <StyledNotification>Error: {error.message}</StyledNotification>
          ) : announcements.length === 0 ? (
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
      </StyledInnerContainer>
    </StyledContainer>
  );
};
