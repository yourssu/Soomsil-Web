import { soomsilClient } from '@/apis';

import { RankingRequestParams } from '../types/RankingRequestParams.type';
import { ProductResponses } from '../types/product.type';

export const getBookmarked = async ({ responseType, page }: RankingRequestParams) => {
  const response = await soomsilClient.get<ProductResponses>('/v2/drawer/my-bookmarked', {
    params: {
      responseType,
      page,
    },
  });

  return response.data;
};
