import { ProductResponses } from '../types/product.type';

import { drawerClient } from './drawerClient';

export const getProductByProvider = async ({
  providerId,
  page = 0,
  category = '',
}: {
  providerId: string;
  page?: number;
  category?: string;
}): Promise<ProductResponses> => {
  const { data } = await drawerClient.get('/v2/drawer', {
    params: {
      responseType: 'WEB',
      providerId,
      page,
      category,
    },
  });
  return data;
};
