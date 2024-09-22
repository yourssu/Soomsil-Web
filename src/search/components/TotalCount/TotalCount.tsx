import { Suspense } from 'react';

import { useSearchParams } from 'react-router-dom';

import { Spacing } from '@/components/Spacing/Spacing';
import { useGetSearch } from '@/search/hooks/useGetSearch';
import { StyledTotalCount } from '@/search/pages/Search/Search.style';

import NoResultFallback from '../FallbackComponent/NoResultFallback';

export const TotalCount = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const { data } = useGetSearch({
    query,
  });

  return (
    <NoResultFallback
      results={data?.pages[0].resultList}
      fallback={<Spacing direction="vertical" size={21} />}
    >
      <Suspense fallback={<Spacing direction="vertical" size={21} />}>
        <StyledTotalCount>{`${data.pages[0].totalCount}개의 검색 결과가 있습니다`}</StyledTotalCount>
      </Suspense>
    </NoResultFallback>
  );
};
