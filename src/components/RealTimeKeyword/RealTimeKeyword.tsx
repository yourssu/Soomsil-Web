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
  RealTimeKeywordProps,
} from '@/components/RealTimeKeyword/RealTimeKeyword.style.ts';
import { useGetRealTimeKeyword } from '@/search/hooks/useGetRealTimeKeyword.ts';
import { formatDateTime } from '@/utils/formatDateTime.ts';

export const RealTimeKeyword = (props: RealTimeKeywordProps) => {
  const { data } = useGetRealTimeKeyword();

  return (
    <StyledContainer
      containerPadding={props.containerPadding}
      containerWidth={props.containerWidth}
      containerHeight={props.containerHeight}
    >
      <Suspense
        fallback={
          <StyledUpdateDate updateDateTypo={props.updateDateTypo}>연결 중입니다.</StyledUpdateDate>
        }
      >
        <StyledTitleContainer
          titleContainerPadding={props.titleContainerPadding}
          titleContainerMarginBottom={props.titleContainerMarginBottom}
        >
          <StyledTitle>
            숨쉬듯이
            <br />
            검색한 키워드
          </StyledTitle>
          <StyledUpdateDate
            updateDateTypo={props.updateDateTypo}
          >{`${formatDateTime(data.basedTime)} 기준`}</StyledUpdateDate>
        </StyledTitleContainer>
        <StyledImage
          imageHeight={props.imageHeight}
          imageWidth={props.imageWidth}
          imageRight={props.imageRight}
          imageTop={props.imageTop}
          src={RealTimeKeywordImage}
          alt="뿌슝이"
        />
        <StyledList columnCount={props.columnCount}>
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
                children={
                  <StyledListItemKeyword keywordWidth={props.keywordWidth}>
                    {value.query}
                  </StyledListItemKeyword>
                }
              />
            </Link>
          ))}
        </StyledList>
      </Suspense>
    </StyledContainer>
  );
};
