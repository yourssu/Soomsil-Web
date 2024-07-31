import { soomsilClient } from '@/apis';

import { DrawerBannerResponse } from '../types/banner.type';

export const getDrawerBanner = async (): Promise<DrawerBannerResponse> => {
  const { data } = await soomsilClient.get('/v2/drawer/banner');
  return data;
};
