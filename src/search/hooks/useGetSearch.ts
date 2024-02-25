import { useInfiniteQuery } from '@tanstack/react-query';

import { getSearch } from '../apis/getSearch';
import { GetSearchProps } from '../types/GetSearch.type';
import { ResultListItemResponse } from '../types/ResultListItem.type';

export const useGetSearch = ({ query }: GetSearchProps) => {
  return useInfiniteQuery<ResultListItemResponse[]>({
    queryKey: ['getSearch', query],
    queryFn: ({ pageParam }) =>
      getSearch({ query, page: pageParam as number }).then((data) => data.resultList),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      return lastPageParam !== allPageParams[-1] ? (lastPageParam as number) + 1 : undefined;
    },
    enabled: !!query,
  });
};
