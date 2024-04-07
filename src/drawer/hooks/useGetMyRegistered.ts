import { useQuery } from '@tanstack/react-query';

import { getMyProduct } from '../apis/getMyProduct';
import { GetRanking } from '../types/GetRanking.type';

export const useGetMyRegistered = ({ responseType, page }: GetRanking) => {
  return useQuery({
    queryKey: ['myRegistered', { responseType, page }],
    queryFn: () => {
      return getMyProduct({ responseType, page });
    },
    select: (data) => data.productList,
  });
};
