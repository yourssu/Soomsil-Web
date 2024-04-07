import { GetRanking } from '../types/GetRanking.type';
import { ProductListResponse } from '../types/ProductList.type';

import { drawerClient } from './drawerClient';

export const getMyProduct = async ({ responseType, page }: GetRanking) => {
  const response = await drawerClient.get<ProductListResponse>('/v2/drawer/my-registered', {
    params: {
      responseType,
      page,
    },
  });

  return response.data;
};
