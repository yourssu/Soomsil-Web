export type Category =
  | ''
  | 'CAMPUS'
  | 'HOBBY'
  | 'HEALTH'
  | 'IT'
  | 'KNOWLEDGE'
  | 'LIFESTYLE'
  | 'ETC';

export interface CategoryInfo {
  category: Category;
  title: string;
  subcategories?: string;
}
