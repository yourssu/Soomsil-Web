import { searchClient } from '@/apis';

import { GetSearchProps } from '../types/GetSearch.type';
import { SearchResponse } from '../types/ResultListItem.type';

export interface CustomErrorType extends Error {
  statusCode: number;
}

export const CustomError = (statusCode: number, message: string, name: string): CustomErrorType => {
  const error = {
    __proto__: Error,
    name,
    message,
    statusCode,
  };

  return error;
};

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
