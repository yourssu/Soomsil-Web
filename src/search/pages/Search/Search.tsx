import { Suspense } from 'react';

import { ErrorBoundary } from 'react-error-boundary';
import { useSearchParams } from 'react-router-dom';

import { Loading } from '@/components/Loading/Loading';
import { RealTimeKeyword } from '@/components/RealTimeKeyword/RealTimeKeyword';
import { Spacing } from '@/components/Spacing/Spacing';
import {
  ResultListFallbackComponent,
  TotalFallbackComponent,
} from '@/search/components/FallbackComponent/FallbackComponent';
import { ResultListItems } from '@/search/components/ResultListItem/ResultListItems';
import { SearchBar } from '@/search/components/SearchBar/SearchBar';
import { TotalCount } from '@/search/components/TotalCount/TotalCount';

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
              fallbackRender={(fallbackProps) => <TotalFallbackComponent {...fallbackProps} />}
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
                    <ResultListFallbackComponent {...fallbackProps} />
                  )}
                  resetKeys={[query]}
                >
                  <Suspense fallback={<Loading />}>
                    <ResultListItems />
                  </Suspense>
                </ErrorBoundary>
              </StyledResultListItemsWrap>
              <RealTimeKeyword
                containerPadding="1.25rem"
                containerWidth="25rem"
                containerHeight="38.7rem"
                titleContainerPadding="0.5rem"
                titleContainerMarginBottom="0.75rem"
                updateDateTypo="body3"
                columnCount={1}
                keywordWidth="auto"
                imageWidth="12.6875rem"
                imageHeight="8.5rem"
                imageTop="-3.125rem"
                imageRight="0"
              />
            </StyledFlexGapContainer>
          </StyledResultContent>
        </StyledResultContentWrap>
      </StyledResultWrap>
    </StyledSearchWrap>
  );
};
