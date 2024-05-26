import { searchClient } from '@/apis';

import { GetSearchProps } from '../types/GetSearch.type';
import { SearchResponse } from '../types/ResultListItem.type';

export const getSearch = async ({ query, page }: GetSearchProps) => {
  const response = await searchClient
    .get<SearchResponse>('/search', {
      params: {
        query,
        page,
      },
    })
    .then((response) => {
      return response;
    });

  return response.data;
};
