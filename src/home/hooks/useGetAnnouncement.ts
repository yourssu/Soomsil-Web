import { useQuery } from '@tanstack/react-query';

import { getAnnouncement } from '@/home/apis/getAnnouncement';

const ONE_HOUR_TO_MS = 1000 * 60 * 60;

export const useGetAnnouncement = () => {
  return useQuery({
    queryKey: ['announcement'],
    queryFn: () => {
      return getAnnouncement();
    },
    refetchOnWindowFocus: false,
    retry: 3,
    gcTime: ONE_HOUR_TO_MS,
  });
};
