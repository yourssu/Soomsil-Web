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
    queryFn: ({ pageParam }) => getSearch({ query, page: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.resultCount === 0 || lastPage.totalCount === lastPage.resultCount) {
        return undefined;
      }

      return allPages.length;
    },
    retryDelay: (_, error) => {
      if (error.message === '검색결과가 없습니다.') {
        return 0;
      }

      return 1000;
    },
    staleTime: 1000 * 60 * 5,
    notifyOnChangeProps: ['data'],
  });
};
