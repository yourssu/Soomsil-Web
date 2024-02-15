import { useEffect, useState } from 'react';

import { IcArrowRightLine, IcPenLine } from '@yourssu/design-system-react';

import IcSoomsilde from '@/assets/search/NoResultIcon.svg';
import { FlexContainer } from '@/components/FlexContainer/FlexContainer';

import {
  StyledModifySection,
  StyledModifyDescription,
  StyledNoResultKeyword,
  StyledNoResultDescription,
  StyledContainer,
  StyledCard,
  StyledCardIconFrame,
  StyledCardDescriptionSection,
  StyledCardTextFrame,
  StyledCardLinkTextDescription,
  StyledCardLinkText,
} from './NoResult.style';

interface AddSectionData {
  linkText: string;
  linkTextDescription: string;
  href: string;
}

const ADD_SECTION_DATA: AddSectionData[] = [
  {
    linkText: '숨쉴위키에 내용 추가 요청하기',
    linkTextDescription: '해당 검색어에 대해 궁금하다면 추가를 요청해보세요',
    href: `https://forms.gle/YruucE1ZkTBtc6YE8`,
  },
  {
    linkText: '숨쉴위키에서 편집하기',
    linkTextDescription: '이미 알고 있는 내용이라면 숨실위키에 내용을 추가해주세요',
    href: `https://wiki.soomsil.de/wiki/index.php?title={query}&action=edit`,
  },
];

export const NoResult = () => {
  const [noResultKeyword, setNoResultKeyword] = useState<string>();
  const [addSectionData, setAddSectionData] = useState<AddSectionData[]>();

  useEffect(() => {
    const currentURL = window.location.href;
    const queryParams = new URLSearchParams(new URL(currentURL).search);
    const queryValue = queryParams.get('query');
    if (queryValue) {
      setNoResultKeyword(queryValue);
    }
  }, []);

  useEffect(() => {
    if (noResultKeyword) {
      setAddSectionData(
        ADD_SECTION_DATA.map((data) => ({
          ...data,
          href: data.href.replace('{query}', encodeURIComponent(noResultKeyword)),
        }))
      );
    }
  }, [noResultKeyword]);

  return (
    <StyledContainer>
      <FlexContainer>
        <StyledNoResultKeyword>'{noResultKeyword}'</StyledNoResultKeyword>
        <StyledNoResultDescription>에 대한 검색결과가 없습니다.</StyledNoResultDescription>
      </FlexContainer>
      <StyledModifySection>
        <StyledModifyDescription>
          찾으시는 검색결과가 없다면 아래 기능을 사용해보세요
        </StyledModifyDescription>
        {addSectionData?.map((value, index) => {
          return (
            <StyledCard key={value.linkText}>
              <StyledCardDescriptionSection>
                <StyledCardIconFrame index={index}>
                  {index === 0 ? (
                    <img src={IcSoomsilde} alt="soomsil" />
                  ) : (
                    <IcPenLine color={'#816DEC'} size={'1.8rem'} />
                  )}
                </StyledCardIconFrame>
                <StyledCardTextFrame>
                  <StyledCardLinkText
                    onClick={() => {
                      window.open(value.href);
                    }}
                  >
                    {value.linkText}
                  </StyledCardLinkText>
                  <StyledCardLinkTextDescription>
                    {value.linkTextDescription}
                  </StyledCardLinkTextDescription>
                </StyledCardTextFrame>
              </StyledCardDescriptionSection>
              <IcArrowRightLine
                style={{
                  cursor: 'pointer',
                }}
                color={'#505458'}
                onClick={() => {
                  window.open(value.href);
                }}
              />
            </StyledCard>
          );
        })}
      </StyledModifySection>
    </StyledContainer>
  );
};
