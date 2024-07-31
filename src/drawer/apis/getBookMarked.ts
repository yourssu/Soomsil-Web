import { soomsilClient } from '@/apis';

import { ProductRequestParams } from '../types/ProductRequestParams.type';
import { ProductResponses } from '../types/product.type';

export const getBookmarked = async ({ responseType, page }: ProductRequestParams) => {
  const response = await soomsilClient.get<ProductResponses>('/v2/drawer/my-bookmarked', {
    params: {
      responseType,
      page,
    },
  });

  return response.data;
};
