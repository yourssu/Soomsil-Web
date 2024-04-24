import { useState } from 'react';

import { IcArrowRightLine } from '@yourssu/design-system-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { LogoutModal } from '@/home/components/Dialog/LogoutModal';

import {
  StyledContainer,
  StyledInnerContainer,
  StyledMenuContainer,
  StyledMenuListTitle,
  StyledMenuTitle,
  StyledListItem,
} from './MyMenuList.style';

export const MyMenuList = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();

  const serviceTermsLink = 'https://yourssu.notion.site/fb10f214be754b1487b3cde19757cba9';
  const privacyPolicyLink = 'https://yourssu.notion.site/b6249cbb5d614ba0be70b7cf4dcdf9cb';
  // const openSourceLink = ''

  return (
    <>
      <StyledContainer>
        <StyledInnerContainer>
          <StyledMenuListTitle>마이페이지</StyledMenuListTitle>
          <StyledMenuContainer>
            <StyledMenuTitle>계정 관리</StyledMenuTitle>
            <StyledListItem>비밀번호 변경</StyledListItem>
            <StyledListItem onClick={() => setIsOpenModal(true)}>로그아웃</StyledListItem>
          </StyledMenuContainer>
          <StyledMenuContainer>
            <StyledMenuTitle>내 서랍장</StyledMenuTitle>
            <StyledListItem
              rightIcon={<IcArrowRightLine color={theme.color.buttonNormal} />}
              onClick={() => navigate('/drawer/myDrawers?tab=MYDRAWER')}
            >
              등록한 콘텐츠
            </StyledListItem>
            <StyledListItem
              rightIcon={<IcArrowRightLine color={theme.color.buttonNormal} />}
              onClick={() => navigate('/drawer/myDrawers?tab=STAR')}
            >
              즐겨찾기한 콘텐츠
            </StyledListItem>
          </StyledMenuContainer>
          <StyledMenuContainer>
            <StyledMenuTitle>웹 정보</StyledMenuTitle>
            <StyledListItem
              rightIcon={<IcArrowRightLine color={theme.color.buttonNormal} />}
              onClick={() => window.open(serviceTermsLink, '_blank')}
            >
              서비스 이용약관
            </StyledListItem>
            <StyledListItem
              rightIcon={<IcArrowRightLine color={theme.color.buttonNormal} />}
              onClick={() => window.open(privacyPolicyLink, '_blank')}
            >
              개인 정보 처리 방침
            </StyledListItem>
            <StyledListItem
              rightIcon={<IcArrowRightLine color={theme.color.buttonNormal} />}
              // onClick={() => window.open(openSourceLink, '_blank')}
            >
              오픈소스 사용 정보
            </StyledListItem>
          </StyledMenuContainer>
        </StyledInnerContainer>
      </StyledContainer>
      <LogoutModal open={isOpenModal} onOpenChange={() => setIsOpenModal(false)} />
    </>
  );
};
