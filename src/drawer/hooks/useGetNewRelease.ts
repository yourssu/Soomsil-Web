import { useQuery } from '@tanstack/react-query';

import { getNewRelease } from '@/drawer/apis/getNewRelease';

import { RankingRequestParams } from '../types/RankingRequestParams.type';

export const useGetNewRelease = ({ responseType, category, page }: RankingRequestParams) => {
  return useQuery({
    queryKey: ['newReleases', { responseType, category, page }],
    queryFn: () => {
      return getNewRelease({
        responseType,
        category,
        page,
      });
    },
    select: (data) => data.productList,
  });
};
