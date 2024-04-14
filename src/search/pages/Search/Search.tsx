import { Suspense } from 'react';

import { useSearchParams } from 'react-router-dom';

import { Loading } from '@/components/Loading/Loading';
import { Spacing } from '@/components/Spacing/Spacing';
import { ErrorBoundary } from '@/search/components/ErrorBoundary/ErrorBoundary';
import {
  ResultListFallbackComponent,
  TotalFallbackComponent,
} from '@/search/components/FallbackComponent/FallbackComponent';
import { RealTimeKeyword } from '@/search/components/RealTimeKeyword/RealTimeKeyword';
import { ResultListItems } from '@/search/components/ResultListItem/ResultListItems';
import { TotalCount } from '@/search/components/TotalCount/TotalCount';

import { SearchBar } from '../../components/SearchBar/SearchBar';

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
            <ErrorBoundary fallback={TotalFallbackComponent} query={query}>
              <Suspense fallback={<Spacing direction="vertical" size={21} />}>
                <TotalCount />
              </Suspense>
            </ErrorBoundary>
            <Spacing direction="vertical" size={20} />
            <StyledFlexGapContainer>
              <StyledResultListItemsWrap>
                <ErrorBoundary fallback={ResultListFallbackComponent} query={query}>
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
