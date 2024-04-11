import { drawerClient } from '@/apis/soomsilClient';

import { ProductDetailResponse } from '../types/product.type';

export const getProductDetail = async (productNo: number): Promise<ProductDetailResponse> => {
  const { data } = await drawerClient.get(`/v2/drawer/detail/${productNo}`);
  return data;
};
