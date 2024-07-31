import { useEffect, useState } from 'react';

import { CheckBox, IcNoticeFilled, IconContext } from '@yourssu/design-system-react';
import { useFormContext } from 'react-hook-form';
import { useTheme } from 'styled-components';

import { MOBILE_VIEW_WIDTH } from '@/drawer/constants/mobileview.constant';

import { WarningAccordion } from './WarningAccordion/WarningAccordion';
import {
  StyledContainer,
  StyledWarningBoxContainer,
  StyledWarningBoxText,
} from './WarningBox.style';

interface WarningBoxProps {
  isSelected: boolean;
  handleSelected: () => void;
}

export const WarningBox = ({ isSelected, handleSelected }: WarningBoxProps) => {
  const { formState } = useFormContext();

  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= MOBILE_VIEW_WIDTH);
  const [isWarned, setIsWarned] = useState(false);

  const theme = useTheme();

  useEffect(() => {
    const handleResize = () => {
      const newIsMobileView = window.innerWidth <= MOBILE_VIEW_WIDTH;
      setIsMobileView(newIsMobileView);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (formState.isSubmitted) {
      setIsWarned(!isSelected);
    }
  }, [formState, isSelected]);

  return (
    <StyledContainer>
      {isMobileView ? (
        <WarningAccordion isWarned={isWarned} />
      ) : (
        <StyledWarningBoxContainer $isWarned={isWarned}>
          <IconContext.Provider
            value={{
              color: theme.color.buttonWarned,
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
      <CheckBox isSelected={isSelected} onClick={handleSelected}>
        확인했습니다.
      </CheckBox>
    </StyledContainer>
  );
};
