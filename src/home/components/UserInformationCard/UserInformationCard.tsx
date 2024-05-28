import { useState } from 'react';

import { BoxButton, IcSettingLine, SimpleTextField } from '@yourssu/design-system-react';
import { useTheme } from 'styled-components';

import Ppussung from '@/assets/home/defaultProfile.png';
import { ProfileSvg } from '@/components/ProfileSvg/ProfileSVG';

import {
  StyledButtonContainer,
  StyledContainer,
  StyledInformationContainer,
  StyledSettingButton,
  StyledUserIconContainer,
  StyledUserMail,
  StyledUserNickname,
} from './UserInformationCard.style';

const Dummy = {
  name: '김뿌슝',
  mail: 'ppussung@yourssu.com',
  image: Ppussung,
};

export const UserInformationCard = () => {
  const [activeEditMode, setAcitveEditMode] = useState(false);
  const [nickname, setNickname] = useState(Dummy.name);
  const theme = useTheme();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  return (
    <StyledContainer>
      <StyledInformationContainer>
        <StyledUserIconContainer>
          <ProfileSvg imageUrl={Dummy.image} />
          {activeEditMode && (
            <StyledSettingButton>
              <IcSettingLine color={theme.color.buttonNormal} size="1rem" />
            </StyledSettingButton>
          )}
        </StyledUserIconContainer>
        <StyledUserNickname>{Dummy.name}</StyledUserNickname>
        <StyledUserMail>{Dummy.mail}</StyledUserMail>
      </StyledInformationContainer>
      {activeEditMode ? (
        <>
          <SimpleTextField
            fieldLabel="닉네임"
            placeholder="뿌슝이"
            width="100%"
            onClickClearButton={() => setNickname('')}
            value={nickname}
            onChange={handleInputChange}
          />
          <StyledButtonContainer>
            <BoxButton size="medium" variant="filled" rounding={4} width="100%">
              저장
            </BoxButton>
            <BoxButton
              size="medium"
              variant="line"
              rounding={4}
              width="100%"
              onClick={() => setAcitveEditMode(false)}
            >
              취소
            </BoxButton>
          </StyledButtonContainer>
        </>
      ) : (
        <BoxButton
          size="medium"
          variant="line"
          rounding={4}
          width="100%"
          onClick={() => {
            setAcitveEditMode(true);
            setNickname(Dummy.name);
          }}
        >
          프로필 편집
        </BoxButton>
      )}
    </StyledContainer>
  );
};
