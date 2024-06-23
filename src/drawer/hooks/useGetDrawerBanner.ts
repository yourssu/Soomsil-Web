import { useQuery } from '@tanstack/react-query';

import { getDrawerBanner } from '../apis/getDrawerBanner';

export const useGetDrawerBanner = () => {
  return useQuery({
    queryKey: ['drawerBanner'],
    queryFn: getDrawerBanner,
    staleTime: Infinity,
    select: (data) => data.bannerList,
  });
};
