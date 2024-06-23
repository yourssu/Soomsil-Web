import { useState } from 'react';

import { BoxButton, IcSettingLine, SimpleTextField } from '@yourssu/design-system-react';
import { useTheme } from 'styled-components';

import { ProfileSvg } from '@/components/ProfileSvg/ProfileSVG';
import { useGetUserData } from '@/home/hooks/useGetUserData';

import {
  StyledButtonContainer,
  StyledContainer,
  StyledInformationContainer,
  StyledSettingButton,
  StyledUserIconContainer,
  StyledUserMail,
  StyledUserNickname,
} from './UserInformationCard.style';

export const UserInformationCard = () => {
  const { data: currentUser } = useGetUserData();
  const [activeEditMode, setAcitveEditMode] = useState(false);
  const [nickname, setNickname] = useState<string>('');
  const theme = useTheme();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  return (
    <StyledContainer>
      {currentUser && (
        <>
          <StyledInformationContainer>
            <StyledUserIconContainer>
              <ProfileSvg imageUrl={currentUser.profileImage.midUrl} />
              {activeEditMode && (
                <StyledSettingButton>
                  <IcSettingLine color={theme.color.buttonNormal} size="1rem" />
                </StyledSettingButton>
              )}
            </StyledUserIconContainer>
            <StyledUserNickname>{currentUser.nickName}</StyledUserNickname>
            <StyledUserMail>{currentUser.email}</StyledUserMail>
          </StyledInformationContainer>
          {/* {activeEditMode ? (
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
                setNickname(currentUser.nickName);
              }}
            >
              프로필 편집
            </BoxButton>
          )} */}
        </>
      )}
    </StyledContainer>
  );
};
