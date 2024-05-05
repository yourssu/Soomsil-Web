import { useSuspenseQuery } from '@tanstack/react-query';

import { getBookmarked } from '../apis/getBookMarked';
import { RankingRequestParams } from '../types/RankingRequestParams.type';

export const useGetBookmarked = ({ responseType, page }: RankingRequestParams) => {
  return useSuspenseQuery({
    queryKey: ['bookmarked', { responseType, page }],
    queryFn: () => {
      return getBookmarked({ responseType, page });
    },
    retry: false,
    select: (data) => data.productList,
  });
};
