import { useSearchParams } from 'react-router-dom';

import { Spacing } from '@/components/Spacing/Spacing';
import { useGetSearch } from '@/search/hooks/useGetSearch';
import { useScrollObserve } from '@/search/hooks/useScrollObserve';

import { ResultListItem } from './ResultListItem';

export const ResultList = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const { data, isPending, fetchNextPage, hasNextPage } = useGetSearch({
    query: query || '',
  });

  const { lastElementRef } = useScrollObserve({ isPending, fetchNextPage, hasNextPage });

  return (
    <>
      {data?.pages.map((page) => {
        return page.resultList.map((item, itemIndex) => {
          if (page.resultList.length === itemIndex + 1) {
            return (
              <div key={item.id}>
                <ResultListItem {...item} ref={lastElementRef}></ResultListItem>
                <Spacing direction="vertical" size={8} />
              </div>
            );
          }
          return (
            <div key={item.id}>
              <ResultListItem {...item}></ResultListItem>
              <Spacing direction="vertical" size={8} />
            </div>
          );
        });
      })}
    </>
  );
};
