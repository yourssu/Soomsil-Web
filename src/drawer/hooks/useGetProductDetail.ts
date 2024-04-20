import { useQuery } from '@tanstack/react-query';

import { getProductDetail } from '../apis/getProductDetail';

export const useGetProductDetail = (productNo: number) => {
  const { data, refetch, ...queryResult } = useQuery({
    queryKey: ['productDetail', productNo],
    queryFn: () => {
      return getProductDetail(productNo);
    },
    select: (data) => data.detail,
  });

  return { product: data, refetch, ...queryResult };
};
