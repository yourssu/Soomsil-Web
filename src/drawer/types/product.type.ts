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
  webpageUrl?: string;
}

export interface ProductResult {
  actionContent?: string;
  actionType: 'BROWSER' | 'DEEPLINK' | 'WEB_VIEW';
  category: 'CAMPUS' | 'ETC' | 'HEALTH' | 'HOBBY' | 'IT' | 'KNOWLEDGE' | 'LIFESTYLE';
  count: number;
  expireDay: number;
  introductionImage: string[];
  isAd: boolean;
  mainImage: string;
  productBookmarkKey?: number;
  productNo: number;
  productSubTitle: string;
  productTitle: string;
  status: 'ACTIVE' | 'INACTIVE';
}

export interface ProductDetailResponse {
  detail: ProductDetailResult;
}

export interface ProductResponses {
  productList: ProductResult[];
}
