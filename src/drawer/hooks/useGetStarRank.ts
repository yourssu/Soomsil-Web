import { InfiniteData, useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { getRanking } from '../apis/getRanking';
import { PRODUCTS_PER_PAGE } from '../constants/page.constant';
import { ProductRequestParams } from '../types/ProductRequestParams.type';
import { ProductResponses, ProductResult } from '../types/product.type';

type ProductRequestParamsWithoutPage = Omit<ProductRequestParams, 'page'>;

export const useGetStarRank = ({ responseType, category }: ProductRequestParamsWithoutPage) => {
  return useSuspenseInfiniteQuery<
    ProductResponses[],
    Error,
    InfiniteData<ProductResult[], number>,
    string[],
    number
  >({
    queryKey: ['getRanking', responseType, category ?? ''],
    queryFn: ({ pageParam }) =>
      getRanking({
        responseType,
        category,
        page: pageParam,
      }).then((data) => data.productList) as Promise<ProductResponses[]>,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === PRODUCTS_PER_PAGE ? allPages.length : undefined;
    },
  });
};
