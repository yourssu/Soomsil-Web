import { RankingRequestParams } from '../types/RankingRequestParams.type';
import { ProductResponses } from '../types/product.type';

import { drawerClient } from './drawerClient';

export const getRanking = async ({ responseType, category, page }: RankingRequestParams) => {
  const response = await drawerClient.get<ProductResponses>('/v2/drawer/rank', {
    params: {
      responseType,
      category,
      page,
    },
  });
  return response.data;
};
