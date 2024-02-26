import { BoxButton, IcSettingLine } from '@yourssu/design-system-react';
import { useTheme } from 'styled-components';

import Ppussung from '@/assets/home/defaultProfile.png';
import { ProfileSvg } from '@/home/components/UserInformationCard/ProfileSVG';

import {
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
  const theme = useTheme();
  return (
    <StyledContainer>
      <StyledInformationContainer>
        <StyledUserIconContainer>
          <ProfileSvg imageUrl={Dummy.image} />
          <StyledSettingButton>
            <IcSettingLine color={theme.color.buttonNormal} size="1rem" />
          </StyledSettingButton>
        </StyledUserIconContainer>
        <StyledUserNickname>{Dummy.name}</StyledUserNickname>
        <StyledUserMail>{Dummy.mail}</StyledUserMail>
      </StyledInformationContainer>
      <BoxButton size="medium" variant="line" rounding={4} width="100%">
        프로필 편집
      </BoxButton>
    </StyledContainer>
  );
};
