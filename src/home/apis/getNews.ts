import { searchClient } from '@/apis';
import { SSUNews } from '@/home/types/news.type';

export const getNews = async (): Promise<SSUNews> => {
  const { data } = await searchClient.get('/search/news', {
    params: {
      platform: 'WEB',
    },
  });
  return data;
};
