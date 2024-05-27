import { soomsilClient } from '@/apis';

import { ProductRequestParams } from '../types/ProductRequestParams.type';
import { ProductResponses } from '../types/product.type';

export const getNewRelease = async ({ responseType, category, page }: ProductRequestParams) => {
  const response = await soomsilClient.get<ProductResponses>('/v2/drawer/new-release', {
    params: {
      responseType,
      category,
      page,
    },
  });
  return response.data;
};
