import { useQuery } from '@tanstack/react-query';

import { getProductByProvider } from '../apis/getProductByProvider';

export const useGetProductByProvider = (providerId: string) => {
  return useQuery({
    queryKey: [providerId],
    queryFn: () => {
      return getProductByProvider(providerId);
    },
    select: (data) => data.productList,
  });
};
