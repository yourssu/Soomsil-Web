import { useEffect, useState } from 'react';

import { CheckBox, IcNoticeFilled, IconContext } from '@yourssu/design-system-react';

import { WarningAccodion } from './WarningAccodion/WarningAccodion';
import {
  StyledContainer,
  StyledWarningBoxContainer,
  StyledWarningBoxText,
} from './WarningBox.style';

export const WarningBox = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 24.375 * 16);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobileView = window.innerWidth <= 24.375 * 16;
      setIsMobileView(newIsMobileView);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <StyledContainer>
      {isMobileView ? (
        <WarningAccodion />
      ) : (
        <StyledWarningBoxContainer>
          <IconContext.Provider
            value={{
              color: '#FF5252',
              size: '2.2rem',
              mirrored: false,
            }}
          >
            <IcNoticeFilled />
          </IconContext.Provider>
          <StyledWarningBoxText>
            본인이 게시하는 이미지가 저작권 기타 법령을 위반하지 않는 것을 확인하였으며, 숨쉴때
            서비스를 통해 공중송신되는 것을 동의합니다.
            <br />
            저작권 기타 법령 위반이 확인되었거나 그러한 신고가 접수되는 경우, 게시자의 동의 없이
            이미지가 삭제될 수 있음을 알립니다.
          </StyledWarningBoxText>
        </StyledWarningBoxContainer>
      )}
      <CheckBox>확인했습니다.</CheckBox>
    </StyledContainer>
  );
};
