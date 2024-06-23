import { InfiniteData, useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { getSearchData } from '../apis/getSearchData';
import { PRODUCTS_PER_PAGE } from '../constants/page.constant';
import { ProductSearchRequestParams } from '../types/ProductRequestParams.type';
import { ProductResponses, ProductResult } from '../types/product.type';

type ProductRequestParamsWithoutPage = Omit<ProductSearchRequestParams, 'page'>;

export const useGetSearchData = ({ keyword, category }: ProductRequestParamsWithoutPage) => {
  return useSuspenseInfiniteQuery<
    ProductResponses[],
    Error,
    InfiniteData<ProductResult[], number>,
    string[],
    number
  >({
    queryKey: ['searchData', keyword ?? '', category ?? ''],
    queryFn: ({ pageParam }) =>
      getSearchData({ keyword, category, page: pageParam }).then(
        (data) => data.productList
      ) as Promise<ProductResponses[]>,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === PRODUCTS_PER_PAGE ? allPages.length : undefined;
    },
    retry: false,
  });
};
