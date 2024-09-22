import { Category } from '../components/Category/Category.type';

export interface ServiceFormValues {
  title: string;
  subtitle: string;
  content: string;
  category: Category;
  webpageUrl: string;
  googlePlayUrl: string;
  appStoreUrl: string;
  githubUrl: string;
  thumbnailImage: File | null;
  introductionImages: (File | null)[];
}
