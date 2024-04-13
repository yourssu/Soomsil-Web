import { useQuery } from '@tanstack/react-query';

import { getBookmarked } from '../apis/getBookMarked';
import { GetRanking } from '../types/GetRanking.type';

export const useGetBookmarked = ({ responseType, page }: GetRanking) => {
  return useQuery({
    queryKey: ['bookmarked', { responseType, page }],
    queryFn: () => {
      return getBookmarked({ responseType, page });
    },
    select: (data) => data.productList,
  });
};
