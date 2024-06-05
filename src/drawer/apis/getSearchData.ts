import { soomsilClient } from '@/apis';

import { ProductSearchRequestParams } from '../types/ProductRequestParams.type';
import { ProductResponses } from '../types/product.type';

export const getSearchData = async ({ keyword, category, page }: ProductSearchRequestParams) => {
  const response = await soomsilClient.get<ProductResponses>('/v2/drawer/search', {
    params: {
      keyword,
      category,
      page,
    },
  });

  return response.data;
};
