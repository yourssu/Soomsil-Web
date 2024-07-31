interface Banner {
  id: number;
  image: string;
  name: string;
  type: 'WEB' | 'APP' | 'WEBAPP';
  website: string;
}

export interface DrawerBannerResponse {
  bannerList: Banner[];
}
