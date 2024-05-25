import { useCallback, useRef } from 'react';

import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';

interface useScrollObserveParams<TData> {
  isPending: boolean;
  hasNextPage: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions
  ) => Promise<InfiniteQueryObserverResult<InfiniteData<TData, unknown>, Error>>;
}

export const useScrollObserve = <TData>({
  isPending,
  hasNextPage,
  fetchNextPage,
}: useScrollObserveParams<TData>) => {
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
