import { useState } from 'react';

import { IcArrowDownLine, IcNoticeFilled, IconContext } from '@yourssu/design-system-react';

import {
  StyledAccordionContainer,
  StyledAccordionContent,
  StyledAccordionHeader,
  StyledAccordionHeaderContainer,
} from './WarningAccodion.style';
export const WarningAccodion = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleOpenAccodion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  return (
    <StyledAccordionContainer>
      <StyledAccordionHeaderContainer onClick={handleOpenAccodion}>
        <IconContext.Provider
          value={{
            color: '#FF5252',
            size: '1.21213rem',
            mirrored: false,
          }}
        >
          <IcNoticeFilled />
        </IconContext.Provider>
        <StyledAccordionHeader>저작권 관련 조항</StyledAccordionHeader>
        <IconContext.Provider
          value={{
            color: '#5A5B63',
            size: '1rem',
            mirrored: false,
          }}
        >
          <IcArrowDownLine />
        </IconContext.Provider>
      </StyledAccordionHeaderContainer>
      <StyledAccordionContent $isOpen={isAccordionOpen}>
        게시하는 이미지가 저작권 기타 법령을 위반하지 않는 것을
        <br />
        확인하였으며, 숨쉴때 서비스를 통해 공중송신되는 것을 동의합니다.
        <br />
        저작권 기타 법령 위반이 확인되었거나 그러한 신고가 접수되는 경우,
        <br />
        이미지 교체 통지 또는 게시자의 동의 없이 서비스 삭제가
        <br />
        이루어질 수 있음을 알립니다.
      </StyledAccordionContent>
    </StyledAccordionContainer>
  );
};
