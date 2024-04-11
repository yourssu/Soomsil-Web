import { drawerClient } from '@/apis/soomsilClient';

import { ProductResponses } from '../types/product.type';

export const getProductByProvider = async ({
  providerId,
  page = 1,
}: {
  providerId: string;
  page?: number;
}): Promise<ProductResponses> => {
  const { data } = await drawerClient.get('/v2/drawer', {
    params: {
      responseType: 'WEB',
      providerId,
      page,
    },
  });
  return data;
};
