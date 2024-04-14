import { GetRanking } from '../types/GetRanking.type';
import { ProductResponses } from '../types/product.type';

import { drawerClient } from './drawerClient';

export const getNewRelease = async ({ responseType, category, page }: GetRanking) => {
  const response = await drawerClient.get<ProductResponses>('/v2/drawer/new-release', {
    params: {
      responseType,
      category,
      page,
    },
  });
  return response.data;
};
