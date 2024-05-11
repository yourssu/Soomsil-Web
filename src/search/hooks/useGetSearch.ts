import { InfiniteData, useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { getSearch, CustomErrorType } from '../apis/getSearch';
import { GetSearchProps } from '../types/GetSearch.type';
import { SearchResponse } from '../types/ResultListItem.type';

export const useGetSearch = ({ query }: GetSearchProps) => {
  return useSuspenseInfiniteQuery<
    SearchResponse,
    CustomErrorType,
    InfiniteData<SearchResponse>,
    string[],
    number
  >({
    queryKey: ['getSearch', query],
    queryFn: ({ pageParam }) => getSearch({ query, page: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.resultCount === 0 || lastPage.totalCount === lastPage.resultCount) {
        return undefined;
      }

      return allPages.length;
    },
    retryDelay: (_, error) => {
      if (error.statusCode === 1000) {
        return 0;
      }

      return 1000;
    },
    staleTime: 1000 * 60 * 5,
    notifyOnChangeProps: ['data'],
  });
};
