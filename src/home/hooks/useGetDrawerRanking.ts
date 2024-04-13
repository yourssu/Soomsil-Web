import { useQuery } from '@tanstack/react-query';

import { getRanking } from '@/drawer/apis/getRanking';

export const useGetDrawerRanking = () => {
  return useQuery({
    queryKey: ['drawerRanking'],
    queryFn: async () => {
      return await getRanking({ responseType: 'WEB', category: '', page: 0 });
    },
  });
};
