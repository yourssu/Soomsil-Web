import { useSearchParams } from 'react-router-dom';

import { useGetSearch } from '@/search/hooks/useGetSearch';
import { StyledTotalCount } from '@/search/pages/Search/Search.style';

export const TotalCount = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const { data } = useGetSearch({
    query: query || '',
  });

  return (
    <StyledTotalCount>{`${data.pages[0].totalCount}개의 검색 결과가 있습니다`}</StyledTotalCount>
  );
};
