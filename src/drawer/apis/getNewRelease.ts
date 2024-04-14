import { soomsilClient } from '@/apis';

import { RankingRequestParams } from '../types/RankingRequestParams.type';
import { ProductResponses } from '../types/product.type';

export const getNewRelease = async ({ responseType, category, page }: RankingRequestParams) => {
  const response = await soomsilClient.get<ProductResponses>('/v2/drawer/new-release', {
    params: {
      responseType,
      category,
      page,
    },
  });
  return response.data;
};
