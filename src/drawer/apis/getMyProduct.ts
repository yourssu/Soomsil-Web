import { RankingRequestParams } from '../types/RankingRequestParams.type';
import { ProductResponses } from '../types/product.type';

import { drawerClient } from './drawerClient';

export const getMyProduct = async ({ responseType, page }: RankingRequestParams) => {
  const response = await drawerClient.get<ProductResponses>('/v2/drawer/my-registered', {
    params: {
      responseType,
      page,
    },
  });

  return response.data;
};
