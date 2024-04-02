import { useQuery } from '@tanstack/react-query';

import { getProductByProvider } from '../apis/getProductByProvider';

export const useGetProductByProvider = ({
  providerId,
  page = 0,
  category = '',
}: {
  providerId: string;
  page?: number;
  category?: string;
}) => {
  return useQuery({
    queryKey: ['productByProvider', providerId, category],
    queryFn: () => {
      return getProductByProvider({ providerId, page, category });
    },
    select: (data) => data.productList,
  });
};
