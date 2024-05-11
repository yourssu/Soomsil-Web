import { searchClient } from '@/apis';

import { CustomErrorCode } from '../constant/customError';
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
      if (response.data.totalCount === 0) {
        throw CustomError(CustomErrorCode.NoResult, '검색결과가 없습니다.', 'NoResultError');
      }
      return response;
    });

  return response.data;
};
