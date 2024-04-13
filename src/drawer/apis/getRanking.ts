import { soomsilClient } from '@/apis';

import { GetRanking } from '../types/GetRanking.type';
import { ProductListResponse } from '../types/ProductList.type';

export const getRanking = async ({ responseType, category, page }: GetRanking) => {
  const response = await soomsilClient.get<ProductListResponse>('/v2/drawer/rank', {
    params: {
      responseType,
      category,
      page,
    },
  });
  return response.data;
};
