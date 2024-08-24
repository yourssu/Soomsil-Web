import { searchClient } from '@/apis';

import { RealTimeKeywordData } from '../types/realTimeKeyword.type';

export const getRealTimeKeyword = async () => {
  const { data } = await searchClient.get<RealTimeKeywordData>('search/topQueries');
  return data;
};
