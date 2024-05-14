import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';

import { getRanking } from '../apis/getRanking';
import { RankingRequestParams } from '../types/RankingRequestParams.type';
import { ProductResponses, ProductResult } from '../types/product.type';
export const useGetStarRank = ({ responseType, category }: RankingRequestParams) => {
  return useInfiniteQuery<
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
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      return lastPage !== allPages[-1] ? lastPageParam + 1 : undefined;
    },
  });
};
