type ActionType = 'BROWSER' | 'DEEPLINK' | 'WEB_VIEW';

type CategoryType = 'CAMPUS' | 'ETC' | 'HEALTH' | 'HOBBY' | 'IT' | 'KNOWLEDGE' | 'LIFESTYLE';

export interface ProductDetailResult {
  actionContent?: string;
  actionType: ActionType;
  appStoreUrl?: string;
  category: CategoryType;
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
  providerName: string;
  thumbnail: string;
  webpageUrl?: string;
}

export interface ProductResult {
  actionContent?: string;
  actionType: ActionType;
  category: CategoryType;
  count: number;
  expireDay: number;
  introductionImage: string[];
  isAd: boolean;
  isBookmarked: boolean;
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

export interface GetProductByProviderProps {
  providerId: string;
  page?: number;
  category?: string;
}
