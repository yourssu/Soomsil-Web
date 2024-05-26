import { InfiniteData, useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { getMyProduct } from '../apis/getMyProduct';
import { ProductRequestParams } from '../types/ProductRequestParams.type';
import { ProductResponses, ProductResult } from '../types/product.type';

type ProductRequestParamsWithoutPage = Omit<ProductRequestParams, 'page'>;

export const useGetMyRegistered = ({ responseType }: ProductRequestParamsWithoutPage) => {
  return useSuspenseInfiniteQuery<
    ProductResponses[],
    Error,
    InfiniteData<ProductResult[], number>,
    string[],
    number
  >({
    queryKey: ['myRegistered', responseType],
    queryFn: ({ pageParam }) =>
      getMyProduct({ responseType, page: pageParam }).then((data) => data.productList) as Promise<
        ProductResponses[]
      >,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      return lastPage !== allPages[-1] ? lastPageParam + 1 : undefined;
    },
    retry: false,
  });
};
