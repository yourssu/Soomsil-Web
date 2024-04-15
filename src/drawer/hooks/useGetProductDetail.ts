import { useSuspenseQuery } from '@tanstack/react-query';

import { getProductDetail } from '../apis/getProductDetail';

export const useGetProductDetail = (productNo: number) => {
  return useSuspenseQuery({
    queryKey: ['productDetail', productNo],
    queryFn: () => {
      return getProductDetail(productNo);
    },
    retry: false,
    select: (data) => data.detail,
  });
};
