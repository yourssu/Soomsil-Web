import { soomsilClient } from '@/apis';
import { GetProductByProviderProps, ProviderProductResponses } from '@/drawer/types/product.type';

export const getProductByProvider = async ({
  providerId,
  page = 0,
  category = '',
}: GetProductByProviderProps): Promise<ProviderProductResponses> => {
  const { data } = await soomsilClient.get('/v2/drawer', {
    params: {
      responseType: 'WEB',
      providerId,
      page,
      category,
    },
  });
  return data.result;
};
