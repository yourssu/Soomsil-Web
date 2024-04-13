import { useQuery } from '@tanstack/react-query';

import { getRanking } from '@/drawer/apis/getRanking';

export const useGetDrawerRanking = () => {
  return useQuery({
    queryKey: ['drawerRanking'],
    queryFn: () => {
      return getRanking({ responseType: 'WEB', category: '', page: 0 });
    },
  });
};
