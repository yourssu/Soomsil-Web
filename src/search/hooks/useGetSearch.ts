import { InfiniteData, useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { getSearch } from '../apis/getSearch';
import { GetSearchProps } from '../types/GetSearch.type';
import { SearchResponse } from '../types/ResultListItem.type';

export const useGetSearch = ({ query }: GetSearchProps) => {
  return useSuspenseInfiniteQuery<
    SearchResponse,
    Error,
    InfiniteData<SearchResponse>,
    string[],
    number
  >({
    queryKey: ['getSearch', query],
    queryFn: ({ pageParam }) =>
      getSearch({ query, page: pageParam }).then((data) => {
        return data;
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      return lastPage !== allPages[-1] ? (lastPageParam as number) + 1 : undefined;
    },
    retryDelay: (failureCount, error) => {
      if (error.message === '검색결과가 없습니다.') {
        return 0;
      }
      if (error) {
        return 1000;
      }
    },
    staleTime: 1000 * 60 * 5,
    notifyOnChangeProps: ['data'],
  });
};
