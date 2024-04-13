import { soomsilClient } from '@/apis';

import { GetRanking } from '../types/GetRanking.type';
import { ProductListResponse } from '../types/ProductList.type';

export const getNewRelease = async ({ responseType, category, page }: GetRanking) => {
  const response = await soomsilClient.get<ProductListResponse>('/v2/drawer/new-release', {
    params: {
      responseType,
      category,
      page,
    },
  });
  console.log(response.data);
  return response.data;
};
