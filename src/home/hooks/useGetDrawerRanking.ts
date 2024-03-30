import { useQuery } from '@tanstack/react-query';

import { getRanking } from '@/drawer/apis/getRanking';

export const useGetDrawerRanking = () => {
  return useQuery({
    queryKey: ['drawerRanking'],
    queryFn: async () => {
      try {
        const response = await getRanking({ responseType: 'WEB', category: '', page: 0 });
        return response;
      } catch {
        throw Error;
      }
    },
  });
};
