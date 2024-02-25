import { useState } from 'react';

import {
  IcArrowDownLine,
  IcArrowUpLine,
  IcNoticeFilled,
  IconContext,
} from '@yourssu/design-system-react';
import { useTheme } from 'styled-components';

import {
  StyledAccordionContainer,
  StyledAccordionContent,
  StyledAccordionHeader,
  StyledAccordionHeaderContainer,
} from './WarningAccordion.style';

export const WarningAccordion = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const theme = useTheme();

  const handleOpenAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  return (
    <StyledAccordionContainer>
      <StyledAccordionHeaderContainer onClick={handleOpenAccordion}>
        <IconContext.Provider
          value={{
            color: theme.color.buttonWarned,
            size: '1.21213rem',
            mirrored: false,
          }}
        >
          <IcNoticeFilled />
        </IconContext.Provider>
        <StyledAccordionHeader>저작권 관련 조항</StyledAccordionHeader>
        <IconContext.Provider
          value={{
            color: theme.color.textPrimary,
            size: '1rem',
            mirrored: false,
          }}
        >
          {isAccordionOpen ? <IcArrowUpLine /> : <IcArrowDownLine />}
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
