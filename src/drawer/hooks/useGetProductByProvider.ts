import { InfiniteData, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import { CategoryState } from '@/drawer/recoil/CategoryState';

import { getProductByProvider } from '../apis/getProductByProvider';
import { ProviderProductResponses } from '../types/product.type';

const PRODUCTS_PER_PAGE = 21;

export const useGetProductByProvider = ({ providerId }: { providerId: string }) => {
  const selectedCategory = useRecoilValue(CategoryState);

  return useSuspenseInfiniteQuery<
    ProviderProductResponses,
    Error,
    InfiniteData<ProviderProductResponses>,
    string[],
    number
  >({
    queryKey: ['productByProvider', providerId, selectedCategory],
    queryFn: ({ pageParam }) => {
      return getProductByProvider({ providerId, page: pageParam, category: selectedCategory });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.products.length === PRODUCTS_PER_PAGE ? allPages.length : undefined;
    },
    retry: false,
  });
};
