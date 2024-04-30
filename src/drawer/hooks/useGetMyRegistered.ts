import { useSuspenseQuery } from '@tanstack/react-query';

import { getMyProduct } from '../apis/getMyProduct';
import { RankingRequestParams } from '../types/RankingRequestParams.type';

export const useGetMyRegistered = ({ responseType, page }: RankingRequestParams) => {
  return useSuspenseQuery({
    queryKey: ['myRegistered', { responseType, page }],
    queryFn: () => {
      return getMyProduct({ responseType, page });
    },
    retry: false,
    select: (data) => data.productList,
  });
};
