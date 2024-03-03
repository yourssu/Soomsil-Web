import { RealTimeKeywordData } from '../types/realTimeKeyword.type';

import { searchClient } from './searchClient';

export const getRealTimeKeyword = () => {
  const response = searchClient.get<RealTimeKeywordData>('search/topQuerys');
  return response;
};
