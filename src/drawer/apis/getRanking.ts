import { GetRanking } from '../types/GetRanking.type';
import { ProductListResponse } from '../types/ProductList.type';

import { drawerClient } from './drawerClient';

export const getRanking = async ({ responseType, category }: GetRanking) => {
  const response = await drawerClient
    .get<ProductListResponse>('/v2/drawer/rank', {
      params: {
        responseType,
        category,
      },
    })
    .then((response) => {
      console.log(response.data);
      return response;
    });
  return response.data;
};
