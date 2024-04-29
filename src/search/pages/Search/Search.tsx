import { Suspense } from 'react';

import { ErrorBoundary } from 'react-error-boundary';
import { useSearchParams } from 'react-router-dom';

import { Loading } from '@/components/Loading/Loading';
import { Spacing } from '@/components/Spacing/Spacing';
import { FallbackComponent } from '@/search/components/FallbackComponent/FallbackComponent';
import { RealTimeKeyword } from '@/search/components/RealTimeKeyword/RealTimeKeyword';
import { ResultListItems } from '@/search/components/ResultListItem/ResultListItems';
import { SearchBar } from '@/search/components/SearchBar/SearchBar';
import { TotalCount } from '@/search/components/TotalCount/TotalCount';

import { NoResult } from '../NoResult/NoResult';

import {
  StyledResultContent,
  StyledResultContentWrap,
  StyledResultWrap,
  StyledSearchWrap,
  StyledFlexGapContainer,
  StyledResultListItemsWrap,
} from './Search.style';

export const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  return (
    <StyledSearchWrap>
      <SearchBar />
      <Spacing direction="vertical" size={108} />
      <StyledResultWrap>
        <StyledResultContentWrap>
          <StyledResultContent>
            <ErrorBoundary
              fallbackRender={(fallbackProps) => (
                <FallbackComponent {...fallbackProps}>
                  <Spacing direction="vertical" size={21} />
                </FallbackComponent>
              )}
              resetKeys={[query]}
            >
              <Suspense fallback={<Spacing direction="vertical" size={21} />}>
                <TotalCount />
              </Suspense>
            </ErrorBoundary>
            <Spacing direction="vertical" size={20} />
            <StyledFlexGapContainer>
              <StyledResultListItemsWrap>
                <ErrorBoundary
                  fallbackRender={(fallbackProps) => (
                    <FallbackComponent {...fallbackProps}>
                      <NoResult />
                    </FallbackComponent>
                  )}
                  resetKeys={[query]}
                >
                  <Suspense fallback={<Loading />}>
                    <ResultListItems />
                  </Suspense>
                </ErrorBoundary>
              </StyledResultListItemsWrap>
              <RealTimeKeyword></RealTimeKeyword>
            </StyledFlexGapContainer>
          </StyledResultContent>
        </StyledResultContentWrap>
      </StyledResultWrap>
    </StyledSearchWrap>
  );
};
