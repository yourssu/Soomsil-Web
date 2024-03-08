export interface ProductDetailResult {
  actionContent?: string;
  actionType: 'BROWSER' | 'DEEPLINK' | 'WEB_VIEW';
  appStoreUrl?: string;
  category: 'CAMPUS' | 'ETC' | 'HEALTH' | 'HOBBY' | 'IT' | 'KNOWLEDGE' | 'LIFESTYLE';
  count: number;
  expireDay: number;
  githubUrl?: string;
  googlePlayUrl?: string;
  introductionImage: string[];
  isAd: boolean;
  isBookmarked: boolean;
  productBookmarkKey?: number;
  productContent: string;
  productNo: number;
  productSubTitle: string;
  productTitle: string;
  providerId: string;
  thumbnail: string;
}

export interface ProductDetailResponse {
  detail: ProductDetailResult;
}
