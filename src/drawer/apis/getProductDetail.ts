import { ProductDetailResponse } from '../types/product.type';

import { drawerClient } from './drawerClient';

export const getProductDetail = async (productNo: number): Promise<ProductDetailResponse> => {
  const { data } = await drawerClient.get(`/v2/drawer/detail/${productNo}`);
  return data;
};
