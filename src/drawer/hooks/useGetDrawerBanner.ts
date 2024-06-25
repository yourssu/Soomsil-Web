import { useSuspenseQuery } from '@tanstack/react-query';

import { getDrawerBanner } from '../apis/getDrawerBanner';

export const useGetDrawerBanner = () => {
  return useSuspenseQuery({
    queryKey: ['drawerBanner'],
    queryFn: getDrawerBanner,
    staleTime: Infinity,
    select: (data) => data.bannerList,
  });
};
