import { useState } from 'react';

import Profile from '@/assets/home/profile.svg';
import { Dropdown } from '@/components/Dropdown/Dropdown';

import { Spacing } from '../Spacing/Spacing';

import {
  Container,
  ProfileContainer,
  ColDivider,
  NonLoginContainer,
  NonLoginText,
  DropDownEmail,
  DropDownLogout,
  DropDownMyPage,
  DropDownName,
} from './Nav.style';
interface NavProps {
  isLoggedIn: boolean;
}
export const Nav = ({ isLoggedIn }: NavProps) => {
  const [onProfileClick, setOnProfileClick] = useState(false);
  const handelProfileClick = () => {
    setOnProfileClick((prev) => !prev);
  };
  return (
    <Container>
      {isLoggedIn ? (
        <div>
          <ProfileContainer src={Profile} alt="profile" onClick={handelProfileClick} />
          {onProfileClick && (
            <Dropdown>
              <DropDownName>뿌슝이</DropDownName>
              <DropDownEmail>cuteppussung@naver.com</DropDownEmail>
              <Spacing size={'1rem'} />
              <DropDownMyPage to="/mypage">마이페이지</DropDownMyPage>
              <Spacing size={'0.25rem'} />
              <DropDownLogout>로그아웃</DropDownLogout>
            </Dropdown>
          )}
        </div>
      ) : (
        <div>
          <NonLoginContainer>
            <NonLoginText to="/login">로그인</NonLoginText>
            <ColDivider>|</ColDivider>
            <NonLoginText to="/signup">회원가입</NonLoginText>
          </NonLoginContainer>
        </div>
      )}
    </Container>
  );
};
