import { FallbackProps } from 'react-error-boundary';

import { Spacing } from '@/components/Spacing/Spacing';
import { NoResult } from '@/search/pages/NoResult/NoResult';

export const ResultListFallbackComponent = ({ error }: FallbackProps) => {
  if (error?.message === '검색결과가 없습니다.') {
    return <NoResult />;
  }

  return <div>다른 에러가 발생했습니다: {error?.message}</div>;
};

export const TotalFallbackComponent = ({ error }: FallbackProps) => {
  if (error?.message === '검색결과가 없습니다.') {
    return <Spacing direction="vertical" size={21} />;
  }

  return <div>다른 에러가 발생했습니다: {error?.message}</div>;
};
