import { useCallback, useEffect, useRef } from 'react';

import { useSearchParams } from 'react-router-dom';

import Spacing from '@/components/Spacing/Spacing';

import { ResultListItem } from './components/ResultListItem/ResultListItem';
import { SearchBar } from './components/SearchBar/SearchBar';
import { useGetSearch } from './hooks/useGetSearch';
import { NoResult } from './pages/NoResult/NoResult';

export const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const { data, isLoading, fetchNextPage, hasNextPage } = useGetSearch({
    query: query as string,
  });

  const observer = useRef<IntersectionObserver>();

  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return;

      if (observer.current) observer.current.disconnect(); // 🔵
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
      <SearchBar />
      {data?.pages.map((page) => {
        if (page.length == 0) return <NoResult />;

        return page.map((item, itemIndex) => {
          if (page.length === itemIndex + 1) {
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
