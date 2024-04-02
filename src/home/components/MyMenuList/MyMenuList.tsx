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
            <StyledListItem rightIcon={<IcArrowRightLine color={theme.color.buttonNormal} />}>
              서비스 이용약관
            </StyledListItem>
            <StyledListItem rightIcon={<IcArrowRightLine color={theme.color.buttonNormal} />}>
              개인 정보 처리 방침
            </StyledListItem>
            <StyledListItem rightIcon={<IcArrowRightLine color={theme.color.buttonNormal} />}>
              오픈소스 사용 정보
            </StyledListItem>
          </StyledMenuContainer>
        </StyledInnerContainer>
      </StyledContainer>
      <LogoutModal open={isOpenModal} onOpenChange={() => setIsOpenModal(false)} />
    </>
  );
};
