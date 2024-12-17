import { searchClient } from '@/apis';
import { SsuNews } from '@/home/types/news.type';

export const getNews = async (): Promise<SsuNews> => {
  const { data } = await searchClient.get('/search/news?platform=WEB');
  return data;
};
