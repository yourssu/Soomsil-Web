import { useQuery } from '@tanstack/react-query';

import { getRealTimeKeyword } from '../apis/getRealTimeKeyword';

export const useGetRealTimeKeyword = () => {
  const ONE_HOUR_TO_MS = 1000 * 60 * 60;

  return useQuery({
    queryKey: ['realTimeKeywords'],
    queryFn: async () => {
      try {
        const response = await getRealTimeKeyword();
        return response.data;
      } catch {
        throw Error;
      }
    },
    refetchOnWindowFocus: false,
    retry: 5,
    staleTime: Infinity,
    gcTime: ONE_HOUR_TO_MS,
  });
};
