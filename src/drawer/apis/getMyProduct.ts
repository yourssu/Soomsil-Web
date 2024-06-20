import { soomsilClient } from '@/apis';

import { ProductRequestParams } from '../types/ProductRequestParams.type';
import { ProductResponses } from '../types/product.type';

export const getMyProduct = async ({ responseType, page }: ProductRequestParams) => {
  const response = await soomsilClient.get<ProductResponses>('/v2/drawer/my-registered', {
    params: {
      responseType,
      page,
    },
  });

  return response.data;
};
