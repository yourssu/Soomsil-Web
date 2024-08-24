import { IcArrowRightLine, IcPenLine } from '@yourssu/design-system-react';
import { useSearchParams } from 'react-router-dom';
import { useTheme } from 'styled-components';

import IcSoomsilde from '@/assets/ic_wiki.svg';
import { FlexContainer } from '@/components/FlexContainer/FlexContainer';

import {
  StyledCard,
  StyledCardDescription,
  StyledCardDescriptionSection,
  StyledCardIconFrame,
  StyledCardTextFrame,
  StyledCardTitle,
  StyledContainer,
  StyledModifyDescription,
  StyledModifySection,
  StyledNoResultDescription,
  StyledNoResultKeyword,
} from './NoResult.style';

const ADD_SECTION_DATA = [
  {
    type: 'request',
    title: '숨쉴위키에 내용 추가 요청하기',
    description: '해당 검색어에 대해 궁금하다면 추가를 요청해보세요',
    url: `https://forms.gle/YruucE1ZkTBtc6YE8`,
  },
  {
    type: 'edit',
    title: '숨쉴위키에서 편집하기',
    description: '이미 알고 있는 내용이라면 숨쉴위키에 내용을 추가해주세요',
    url: (query: string) => `https://wiki.soomsil.de/wiki/index.php?title=${query}&action=edit`,
  },
] as const;

export const NoResult = () => {
  const theme = useTheme();
  const [searchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  const handleClickAddSection = (type: 'request' | 'edit') => {
    if (type === 'request') {
      window.open(ADD_SECTION_DATA[0].url, '_blank');
    } else {
      window.open(ADD_SECTION_DATA[1].url(query), '_blank');
    }
  };

  return (
    <StyledContainer>
      <FlexContainer>
        <StyledNoResultKeyword>'{query}'</StyledNoResultKeyword>
        <StyledNoResultDescription>에 대한 검색결과가 없습니다.</StyledNoResultDescription>
      </FlexContainer>
      <StyledModifySection>
        <StyledModifyDescription>
          찾으시는 검색결과가 없다면 아래 기능을 사용해보세요
        </StyledModifyDescription>
        {ADD_SECTION_DATA.map((section) => {
          return (
            <StyledCard key={section.type} onClick={() => handleClickAddSection(section.type)}>
              <StyledCardDescriptionSection>
                <StyledCardIconFrame $type={section.type}>
                  {section.type === 'request' ? (
                    <img src={IcSoomsilde} alt="soomsil" />
                  ) : (
                    <IcPenLine size="1.8rem" color={theme.color.buttonPoint} />
                  )}
                </StyledCardIconFrame>
                <StyledCardTextFrame>
                  <StyledCardTitle>{section.title}</StyledCardTitle>
                  <StyledCardDescription>{section.description}</StyledCardDescription>
                </StyledCardTextFrame>
              </StyledCardDescriptionSection>
              <IcArrowRightLine size="1.2rem" color={theme.color.buttonNormal} />
            </StyledCard>
          );
        })}
      </StyledModifySection>
    </StyledContainer>
  );
};
