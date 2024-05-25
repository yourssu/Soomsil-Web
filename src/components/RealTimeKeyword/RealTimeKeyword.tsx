import { Suspense } from 'react';

import { IcSearchLine } from '@yourssu/design-system-react';
import { Link } from 'react-router-dom';

import RealTimeKeywordImage from '@/assets/realTimeKeyword.webp';
import {
  variantStyles,
  VariantType,
} from '@/components/RealTimeKeyword/RealTimeKeyword.constant.ts';
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
} from '@/components/RealTimeKeyword/RealTimeKeyword.style.ts';
import { useGetRealTimeKeyword } from '@/search/hooks/useGetRealTimeKeyword.ts';
import { formatDateTime } from '@/utils/formatDateTime.ts';

interface RealTimeKeywordProps {
  variant: VariantType;
}

export const RealTimeKeyword = ({ variant }: RealTimeKeywordProps) => {
  const { data } = useGetRealTimeKeyword();
  const {
    $containerPadding,
    $containerWidth,
    $containerHeight,
    $titleContainerPadding,
    $titleContainerMarginBottom,
    $updateDateTypo,
    $columnCount,
    $keywordWidth,
    $imageWidth,
    $imageHeight,
    $imageTop,
    $imageRight,
  } = variantStyles[variant];

  return (
    <StyledContainer
      $containerPadding={$containerPadding}
      $containerWidth={$containerWidth}
      $containerHeight={$containerHeight}
    >
      <Suspense
        fallback={
          <StyledUpdateDate $updateDateTypo={$updateDateTypo}>연결 중입니다.</StyledUpdateDate>
        }
      >
        <StyledTitleContainer
          $titleContainerPadding={$titleContainerPadding}
          $titleContainerMarginBottom={$titleContainerMarginBottom}
        >
          <StyledTitle>{'숨쉬듯이\n검색한 키워드'}</StyledTitle>
          <StyledUpdateDate
            $updateDateTypo={$updateDateTypo}
          >{`${formatDateTime(data.basedTime)} 기준`}</StyledUpdateDate>
        </StyledTitleContainer>
        <StyledImage
          $imageHeight={$imageHeight}
          $imageWidth={$imageWidth}
          $imageRight={$imageRight}
          $imageTop={$imageTop}
          src={RealTimeKeywordImage}
          alt="뿌슝이"
        />
        <StyledList $columnCount={$columnCount}>
          {data.queries.map((value, index) => (
            <Link key={value.query} to={`/search?query=${value.query}`}>
              <StyledListItem
                key={value.query}
                leftIcon={
                  <StyledListItemRanking $rank={index + 1}>{index + 1}</StyledListItemRanking>
                }
                rightIcon={<IcSearchLine color="#8A2AC5" width="1.25rem" />}
              >
                <StyledListItemKeyword $keywordWidth={$keywordWidth}>
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
