import { ErrorBoundary } from 'react-error-boundary';
import { useSearchParams } from 'react-router-dom';

import { Spacing } from '@/components/Spacing/Spacing';
import { ErrorFallback } from '@/search/components/FallbackComponent/ErrorFallback';
import { RealTimeKeyword } from '@/search/components/RealTimeKeyword/RealTimeKeyword';
import { ResultList } from '@/search/components/ResultList/ResultList';
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
              fallbackRender={() => <Spacing direction="vertical" size={21} />}
              resetKeys={[query]}
            >
              <TotalCount />
            </ErrorBoundary>
            <Spacing direction="vertical" size={20} />
            <StyledFlexGapContainer>
              <StyledResultListItemsWrap>
                <ErrorBoundary
                  fallbackRender={(fallbackProps) => <ErrorFallback {...fallbackProps} />}
                  resetKeys={[query]}
                >
                  <ResultList />
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
