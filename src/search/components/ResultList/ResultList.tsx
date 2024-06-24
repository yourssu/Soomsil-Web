import { Suspense } from 'react';

import { LogClick } from '@yourssu/logging-system-react';
import { useSearchParams } from 'react-router-dom';

import { Loading } from '@/components/Loading/Loading';
import { Spacing } from '@/components/Spacing/Spacing';
import { useGetUserData } from '@/home/hooks/useGetUserData';
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

  const { data: currentUser } = useGetUserData();
  const userId = currentUser?.email || '';

  return (
    <NoResultFallback results={data?.pages[0].resultList} fallback={<NoResult />}>
      <Suspense fallback={<Loading />}>
        {data?.pages.map((page) => {
          return page.resultList.map((item, itemIndex) => {
            const isLastItem = page.resultList.length === itemIndex + 1;
            return (
              <div key={item.id}>
                <LogClick
                  params={{
                    userId,
                    version: 1,
                    event: {
                      platform: 'web',
                      name: 'searchResultClicked',
                      screen: 'SearchResult',
                      params: {
                        searchKeyword: query,
                        source: item.link,
                        resultDate: item.date,
                        imageCount: item.thumbnail.length,
                        listItemCount: data.pages[0].totalCount,
                      },
                    },
                  }}
                >
                  <ResultListItem
                    {...item}
                    onClick={() => window.open(item.link)}
                    ref={isLastItem ? lastElementRef : null}
                  />
                </LogClick>
                <Spacing direction="vertical" size={8} />
              </div>
            );
          });
        })}
      </Suspense>
    </NoResultFallback>
  );
};
