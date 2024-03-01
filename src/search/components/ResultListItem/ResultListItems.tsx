import { useCallback, useEffect, useRef } from 'react';

import { useSearchParams } from 'react-router-dom';

import Spacing from '@/components/Spacing/Spacing';
import { useGetSearch } from '@/search/hooks/useGetSearch';

import { ResultListItem } from './ResultListItem';

export const ResultListItems = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const { data, refetch, isLoading, fetchNextPage, hasNextPage } = useGetSearch({
    query: query || '',
  });

  const prevQueryRef = useRef(query);

  useEffect(() => {
    if (prevQueryRef.current !== query) {
      refetch();
    }

    prevQueryRef.current = query;
  }, [refetch, query]);

  const observer = useRef<IntersectionObserver>();

  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return;

      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasNextPage]
  );

  return (
    <>
      {data?.pages.map((page) => {
        return page.resultList.map((item, itemIndex) => {
          if (page.resultList.length === itemIndex + 1) {
            return <ResultListItem key={item.id} {...item} ref={lastElementRef}></ResultListItem>;
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
