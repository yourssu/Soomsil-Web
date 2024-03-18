import { ProductResponses } from '../types/product.type';

import { drawerClient } from './drawerClient';

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
