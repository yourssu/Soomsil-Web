import { ProductResponses } from '../types/product.type';

import { drawerClient } from './drawerClient';

export const getProductByProvider = async (providerId: string): Promise<ProductResponses> => {
  const { data } = await drawerClient.get(
    `/v2/drawer?responseType=WEB&providerId=${providerId}&page=1`
  );
  return data;
};
