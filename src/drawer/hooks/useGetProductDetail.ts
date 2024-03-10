import { useQuery } from '@tanstack/react-query';

import { getProductDetail } from '../apis/getProductDetail';

export const useGetProductDetail = (productNo: number) => {
  return useQuery({
    queryKey: ['productDetail', productNo],
    queryFn: () => {
      return getProductDetail(productNo);
    },
  });
};
