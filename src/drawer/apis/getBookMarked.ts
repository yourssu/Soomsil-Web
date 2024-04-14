import { GetRanking } from '../types/GetRanking.type';
import { ProductResponses } from '../types/product.type';

import { drawerClient } from './drawerClient';

export const getBookmarked = async ({ responseType, page }: GetRanking) => {
  const response = await drawerClient.get<ProductResponses>('/v2/drawer/my-bookmarked', {
    params: {
      responseType,
      page,
    },
  });

  return response.data;
};
