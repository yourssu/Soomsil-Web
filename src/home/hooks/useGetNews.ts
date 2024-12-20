import { useSuspenseQuery } from '@tanstack/react-query';

import { getNews } from '../apis/getNews';

export const useGetNews = () => {
  return useSuspenseQuery({
    queryKey: ['news'],
    queryFn: getNews,
  });
};
