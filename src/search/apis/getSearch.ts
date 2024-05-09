import { searchClient } from '@/apis';

import { CustomErrorCode } from '../constant/customError';
import { GetSearchProps } from '../types/GetSearch.type';
import { SearchResponse } from '../types/ResultListItem.type';

export class NoResultError extends Error {
  statusCode: number;

  constructor(statusCode: number, message?: string) {
    super(message);
    this.name = 'NoResultError';
    this.statusCode = statusCode;
  }
}

export const getSearch = async ({ query, page }: GetSearchProps) => {
  const response = await searchClient
    .get<SearchResponse>('/search', {
      params: {
        query,
        page,
      },
    })
    .then((response) => {
      if (response.data.totalCount === 0) {
        throw new NoResultError(CustomErrorCode.NoResult, '검색결과가 없습니다.');
      }
      return response;
    });

  return response.data;
};
