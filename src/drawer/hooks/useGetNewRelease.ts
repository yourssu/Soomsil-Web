import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';

import { getNewRelease } from '@/drawer/apis/getNewRelease';

import { RankingRequestParams } from '../types/RankingRequestParams.type';
import { ProductResponses, ProductResult } from '../types/product.type';

export const useGetNewRelease = ({ responseType, category }: RankingRequestParams) => {
  return useInfiniteQuery<
    ProductResponses[],
    Error,
    InfiniteData<ProductResult[], number>,
    string[],
    number
  >({
    queryKey: ['newReleases', responseType, category ?? ''],
    queryFn: ({ pageParam }) =>
      getNewRelease({
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
