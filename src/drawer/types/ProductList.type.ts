export interface Product {
  actionContent: string;
  actionType: string;
  category: string;
  count: number;
  expireDay: number;
  introductionImage: string[];
  isAd: boolean;
  isBookmarked: boolean;
  mainImage: string;
  productBookmarkKey: number;
  productNo: number;
  productSubTitle: string;
  productTitle: string;
  status: string;
}

export interface ProductListResponse {
  productList: Product[];
}
