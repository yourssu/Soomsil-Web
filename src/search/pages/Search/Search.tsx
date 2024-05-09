import { ErrorBoundary } from 'react-error-boundary';
import { useSearchParams } from 'react-router-dom';

import { Spacing } from '@/components/Spacing/Spacing';
import { FallbackComponent } from '@/search/components/FallbackComponent/FallbackComponent';
import { RealTimeKeyword } from '@/search/components/RealTimeKeyword/RealTimeKeyword';
import { ResultList } from '@/search/components/ResultListItem/ResultList';
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
              fallbackRender={() => <Spacing direction="vertical" size={21} />}
              resetKeys={[query]}
            >
              <TotalCount />
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
                  <ResultList />
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
