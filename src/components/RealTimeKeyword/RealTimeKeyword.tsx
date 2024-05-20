import { Suspense } from 'react';

import { IcSearchLine, IconContext } from '@yourssu/design-system-react';
import { Link } from 'react-router-dom';

import RealTimeKeywordImage from '@/assets/realTimeKeyword.webp';
import {
  StyledContainer,
  StyledTitleContainer,
  StyledImage,
  StyledTitle,
  StyledUpdateDate,
  StyledList,
  StyledListItemRanking,
  StyledListItemKeyword,
  StyledListItem,
  RealTimeKeywordStyleProps,
} from '@/components/RealTimeKeyword/RealTimeKeyword.style.ts';
import { useGetRealTimeKeyword } from '@/search/hooks/useGetRealTimeKeyword.ts';
import { formatDateTime } from '@/utils/formatDateTime.ts';

type VariantType = 'home' | 'search';

const variantStyles: { [key in VariantType]: RealTimeKeywordStyleProps } = {
  home: {
    containerPadding: '1rem',
    containerWidth: '32.5rem',
    containerHeight: 'auto',
    titleContainerPadding: '0.3125rem 0.5rem',
    titleContainerMarginBottom: '0.5rem',
    updateDateTypo: 'caption2',
    columnCount: 2,
    keywordWidth: '7.375rem',
    imageWidth: '10.3125rem',
    imageHeight: '6.875rem',
    imageTop: '-1.125rem',
    imageRight: '0.9375rem',
  },
  search: {
    containerPadding: '1.25rem',
    containerWidth: '25rem',
    containerHeight: '38.7rem',
    titleContainerPadding: '0.5rem',
    titleContainerMarginBottom: '0.75rem',
    updateDateTypo: 'body3',
    columnCount: 1,
    keywordWidth: 'auto',
    imageWidth: '12.6875rem',
    imageHeight: '8.5rem',
    imageTop: '-3.125rem',
    imageRight: '0',
  },
};

interface RealTimeKeywordProps {
  variant: VariantType;
}

export const RealTimeKeyword = ({ variant }: RealTimeKeywordProps) => {
  const { data } = useGetRealTimeKeyword();
  const {
    containerPadding,
    containerWidth,
    containerHeight,
    titleContainerPadding,
    titleContainerMarginBottom,
    updateDateTypo,
    columnCount,
    keywordWidth,
    imageWidth,
    imageHeight,
    imageTop,
    imageRight,
  } = variantStyles[variant];

  return (
    <StyledContainer
      containerPadding={containerPadding}
      containerWidth={containerWidth}
      containerHeight={containerHeight}
    >
      <Suspense
        fallback={
          <StyledUpdateDate updateDateTypo={updateDateTypo}>연결 중입니다.</StyledUpdateDate>
        }
      >
        <StyledTitleContainer
          titleContainerPadding={titleContainerPadding}
          titleContainerMarginBottom={titleContainerMarginBottom}
        >
          <StyledTitle>
            숨쉬듯이
            <br />
            검색한 키워드
          </StyledTitle>
          <StyledUpdateDate
            updateDateTypo={updateDateTypo}
          >{`${formatDateTime(data.basedTime)} 기준`}</StyledUpdateDate>
        </StyledTitleContainer>
        <StyledImage
          imageHeight={imageHeight}
          imageWidth={imageWidth}
          imageRight={imageRight}
          imageTop={imageTop}
          src={RealTimeKeywordImage}
          alt="뿌슝이"
        />
        <StyledList columnCount={columnCount}>
          {data.queries.map((value, index) => (
            <Link key={value.query} to={`/search?query=${value.query}`}>
              <StyledListItem
                key={value.query}
                leftIcon={
                  <StyledListItemRanking $rank={index + 1}>{index + 1}</StyledListItemRanking>
                }
                rightIcon={
                  <IconContext.Provider
                    value={{
                      color: '#8A2AC5',
                    }}
                  >
                    <IcSearchLine />
                  </IconContext.Provider>
                }
              >
                <StyledListItemKeyword keywordWidth={keywordWidth}>
                  {value.query}
                </StyledListItemKeyword>
              </StyledListItem>
            </Link>
          ))}
        </StyledList>
      </Suspense>
    </StyledContainer>
  );
};
