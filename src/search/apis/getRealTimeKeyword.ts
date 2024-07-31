import { searchClient } from '@/apis';

import { RealTimeKeywordData } from '../types/realTimeKeyword.type';

export const getRealTimeKeyword = () => {
  const response = searchClient.get<RealTimeKeywordData>('search/topQueries');
  return response;
};
