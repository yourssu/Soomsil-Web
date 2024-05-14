import { InfiniteData, useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { getBookmarked } from '../apis/getBookMarked';
import { RankingRequestParams } from '../types/RankingRequestParams.type';
import { ProductResponses, ProductResult } from '../types/product.type';

export const useGetBookmarked = ({ responseType }: RankingRequestParams) => {
  return useSuspenseInfiniteQuery<
    ProductResponses[],
    Error,
    InfiniteData<ProductResult[], number>,
    string[],
    number
  >({
    queryKey: ['bookmarked', responseType],
    queryFn: ({ pageParam }) =>
      getBookmarked({ responseType, page: pageParam }).then((data) => data.productList) as Promise<
        ProductResponses[]
      >,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      return lastPage !== allPages[-1] ? lastPageParam + 1 : undefined;
    },
    retry: false,
  });
};
