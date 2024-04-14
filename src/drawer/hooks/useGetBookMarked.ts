import { useQuery } from '@tanstack/react-query';

import { getBookmarked } from '../apis/getBookMarked';
import { RankingRequestParams } from '../types/RankingRequestParams.type';

export const useGetBookmarked = ({ responseType, page }: RankingRequestParams) => {
  return useQuery({
    queryKey: ['bookmarked', { responseType, page }],
    queryFn: () => {
      return getBookmarked({ responseType, page });
    },
    select: (data) => data.productList,
  });
};
