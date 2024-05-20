import { useCallback, useRef } from 'react';

import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';

import { SearchResponse } from '../types/ResultListItem.type';

interface useScrollObserveParams {
  isPending: boolean;
  hasNextPage: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions
  ) => Promise<InfiniteQueryObserverResult<InfiniteData<SearchResponse, unknown>, Error>>;
}

export const useScrollObserve = ({
  isPending,
  hasNextPage,
  fetchNextPage,
}: useScrollObserveParams) => {
  const observer = useRef<IntersectionObserver>();

  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isPending) return;

      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isPending, hasNextPage, fetchNextPage]
  );

  return { lastElementRef };
};
