import { GetSearchProps } from '../types/GetSearch.type';

import { searchClient } from './searchClient';

export const getSearch = async ({ query, page }: GetSearchProps) => {
  const response = await searchClient.get('/search', {
    params: {
      query,
      page,
    },
  });

  if (response.data.totalCount === 0) {
    throw new Error('검색결과가 없습니다.');
  }

  return response.data;
};
