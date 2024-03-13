import { useQuery } from '@tanstack/react-query';

import { getProductByProvider } from '../apis/getProductByProvider';

export const useGetProductByProvider = ({
  providerId,
  page = 1,
}: {
  providerId: string;
  page?: number;
}) => {
  return useQuery({
    queryKey: [providerId],
    queryFn: () => {
      return getProductByProvider({ providerId, page });
    },
    select: (data) => data.productList,
  });
};
