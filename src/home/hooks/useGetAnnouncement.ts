import { useQuery } from '@tanstack/react-query';

import { getAnnouncement } from '@/home/apis/getAnnouncement';

export const useGetAnnouncement = () => {
  return useQuery({
    queryKey: ['announcement'],
    queryFn: () => {
      return getAnnouncement();
    },
  });
};
