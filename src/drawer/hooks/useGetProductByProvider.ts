import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import { CategoryState } from '@/drawer/recoil/CategoryState';

import { getProductByProvider } from '../apis/getProductByProvider';

export const useGetProductByProvider = ({
  providerId,
  page = 0,
}: {
  providerId: string;
  page?: number;
}) => {
  const selectedCategory = useRecoilValue(CategoryState);

  return useQuery({
    queryKey: ['productByProvider', providerId, selectedCategory],
    queryFn: () => {
      return getProductByProvider({ providerId, page, category: selectedCategory });
    },
    select: (data) => data.productList,
  });
};
