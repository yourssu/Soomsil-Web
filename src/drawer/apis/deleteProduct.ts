import { soomsilClient } from '@/apis';

export const deleteProduct = async (productId: number) => {
  const { data } = await soomsilClient.delete(`/v2/drawer/${productId}`);
  return data;
};
