import { useQuery } from '@tanstack/react-query';

import { getMyProduct } from '../apis/getMyProduct';
import { RankingRequestParams } from '../types/RankingRequestParams.type';

export const useGetMyRegistered = ({ responseType, page }: RankingRequestParams) => {
  return useQuery({
    queryKey: ['myRegistered', { responseType, page }],
    queryFn: () => {
      return getMyProduct({ responseType, page });
    },
    select: (data) => data.productList,
  });
};
