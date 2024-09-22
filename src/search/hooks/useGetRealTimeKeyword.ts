import { useSuspenseQuery } from '@tanstack/react-query';

import { getRealTimeKeyword } from '../apis/getRealTimeKeyword';

export const useGetRealTimeKeyword = () => {
  return useSuspenseQuery({
    queryKey: ['realTimeKeywords'],
    queryFn: getRealTimeKeyword,
    staleTime: Infinity,
  });
};
