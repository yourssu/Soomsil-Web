import { soomsilClient } from '@/apis';

import { ProductRequestParams } from '../types/ProductRequestParams.type';
import { ProductResponses } from '../types/product.type';

export const getRanking = async ({ responseType, category, page }: ProductRequestParams) => {
  const response = await soomsilClient.get<ProductResponses>('/v2/drawer/rank', {
    params: {
      responseType,
      category,
      page,
    },
  });
  return response.data;
};
