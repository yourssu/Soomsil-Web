import { Suspense } from 'react';

import { useSearchParams } from 'react-router-dom';

import { Loading } from '@/components/Loading/Loading';
import { Spacing } from '@/components/Spacing/Spacing';
import { useScrollObserve } from '@/hooks/useScrollObserve';
import { useGetSearch } from '@/search/hooks/useGetSearch';
import { NoResult } from '@/search/pages/NoResult/NoResult';
import { SearchResponse } from '@/search/types/ResultListItem.type';

import NoResultFallback from '../FallbackComponent/NoResultFallback';

import { ResultListItem } from './ResultListItem';

export const ResultList = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const { data, isPending, fetchNextPage, hasNextPage } = useGetSearch({
    query: query || '',
  });

  const { lastElementRef } = useScrollObserve<SearchResponse>({
    isPending,
    fetchNextPage,
    hasNextPage,
  });

  return (
    <NoResultFallback results={data?.pages[0].resultList} fallback={<NoResult />}>
      <Suspense fallback={<Loading />}>
        {data?.pages.map((page) => {
          return page.resultList.map((item, itemIndex) => {
            const isLastItem = page.resultList.length === itemIndex + 1;
            return (
              <div key={item.id}>
                <ResultListItem {...item} ref={isLastItem ? lastElementRef : null}></ResultListItem>
                <Spacing direction="vertical" size={8} />
              </div>
            );
          });
        })}
      </Suspense>
    </NoResultFallback>
  );
};
