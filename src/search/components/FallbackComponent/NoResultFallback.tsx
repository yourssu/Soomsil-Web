import { ReactNode } from 'react';

import { ResultListItemResponse } from '@/search/types/ResultListItem.type';

interface NoResultFallbackFallbackProps {
  results: ResultListItemResponse[];
  fallback: ReactNode;
  children: ReactNode;
}

const NoResultFallback = ({ results, fallback, children }: NoResultFallbackFallbackProps) => {
  return results.length > 0 ? children : fallback;
};

export default NoResultFallback;
