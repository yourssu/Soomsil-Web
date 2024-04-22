import { useQuery } from '@tanstack/react-query';

import { getRanking } from '../apis/getRanking';
import { RankingRequestParams } from '../types/RankingRequestParams.type';

export const useGetStarRank = ({ responseType, category, page }: RankingRequestParams) => {
  return useQuery({
    queryKey: ['getRanking', { responseType, category, page }],
    queryFn: () => {
      return getRanking({
        responseType,
        category,
        page,
      });
    },
    select: (data) => data.productList,
  });
};
