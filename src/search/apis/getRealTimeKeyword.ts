import { RealTimeKeywordData } from '../types/realTimeKeyword.type';

import { searchClient } from './searchClient';

export const getRealTimeKeyword = () => {
  const response = searchClient.get<RealTimeKeywordData>('search/topQueries');
  return response;
};
