import { useSuspenseQuery } from '@tanstack/react-query';
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

  return useSuspenseQuery({
    queryKey: ['productByProvider', providerId, selectedCategory],
    queryFn: () => {
      return getProductByProvider({ providerId, page, category: selectedCategory });
    },
    retry: false,
    select: (data) => data.productList.slice(0, 5),
  });
};
