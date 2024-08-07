import { useSuspenseQuery } from '@tanstack/react-query';

import { getAnnouncement } from '@/home/apis/getAnnouncement';

export const useGetAnnouncement = () => {
  return useSuspenseQuery({
    queryKey: ['announcement'],
    queryFn: getAnnouncement,
    select: (data) => data.announcementList,
  });
};
