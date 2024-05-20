import { CategoryInfo } from '../components/Category/Category.type';

export const CategoryList: CategoryInfo[] = [
  { category: '', title: '전체' },
  { category: 'CAMPUS', title: '교내생활' },
  { category: 'HOBBY', title: '취미', subcategories: '(음악, 스포츠, 게임, 여행)' },
  { category: 'HEALTH', title: '건강', subcategories: '(건강 및 피트니스, 의료)' },
  { category: 'IT', title: 'IT', subcategories: '(AI, 개발자, 디자인)' },
  { category: 'KNOWLEDGE', title: '지식', subcategories: '(비즈니스, 교육, 뉴스, 금융)' },
  { category: 'LIFESTYLE', title: '라이프스타일', subcategories: '(소셜 네트워킹, 미디어, 일상)' },
  { category: 'ETC', title: '기타' },
];

export const CategoryObj = CategoryList.reduce((acc: Record<string, string>, curr) => {
  if (curr.category) acc[curr.category] = curr.title;
  return acc;
}, {});
