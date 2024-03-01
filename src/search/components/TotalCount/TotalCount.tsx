import { useEffect, useRef } from 'react';

import { useSearchParams } from 'react-router-dom';

import { useGetSearch } from '@/search/hooks/useGetSearch';
import { StyledTotalCount } from '@/search/pages/Search/Search.style';

export const TotalCount = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const { data, refetch, isError } = useGetSearch({
    query: query || '',
  });

  useEffect(() => {
    if (isError) {
      refetch();
    }
  }, [refetch, isError]);

  const prevQueryRef = useRef(query);

  useEffect(() => {
    if (prevQueryRef.current !== query) {
      refetch();
    }

    prevQueryRef.current = query;
  }, [refetch, query]);

  return (
    <StyledTotalCount>{`${data.pages[0].totalCount}개의 검색 결과가 있습니다`}</StyledTotalCount>
  );
};
