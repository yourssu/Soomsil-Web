import { GetSearchProps } from '../types/GetSearch.type';

import { searchClient } from './searchClient';

export const getSearch = async ({ query, page }: GetSearchProps) => {
  const response = await searchClient.get('/search', {
    params: {
      query,
      page,
    },
  });
  return response.data;
};
