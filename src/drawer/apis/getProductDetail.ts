import { soomsilClient } from '@/apis';

import { ProductDetailResponse } from '../types/product.type';

export const getProductDetail = async (productNo: number): Promise<ProductDetailResponse> => {
  const { data } = await soomsilClient.get(`/v2/drawer/detail/${productNo}`);
  return data;
};
