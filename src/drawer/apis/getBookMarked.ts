import { GetRanking } from '../types/GetRanking.type';
import { ProductListResponse } from '../types/ProductList.type';

import { drawerClient } from './drawerClient';

export const getBookmarked = async ({ responseType, page }: GetRanking) => {
  const response = await drawerClient.get<ProductListResponse>('/v2/drawer/my-bookmarked', {
    params: {
      responseType,
      page,
    },
  });

  return response.data;
};
