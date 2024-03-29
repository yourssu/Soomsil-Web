import { useState } from 'react';

import Profile from '@/assets/home/profile.svg';
import { Dropdown } from '@/components/Dropdown/Dropdown';

import {
  StyledContainer,
  StyledProfileContainer,
  StyledColDivider,
  StyledNonLoginContainer,
  StyledNonLoginText,
  StyledDropDownEmail,
  StyledDropDownLogout,
  StyledDropDownMyPage,
  StyledDropDownName,
} from './Nav.style';
interface NavProps {
  isLoggedIn: boolean;
}
export const Nav = ({ isLoggedIn }: NavProps) => {
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const handleProfileClick = () => {
    setIsProfileClicked((prev) => !prev);
  };
  return (
    <StyledContainer>
      {isLoggedIn ? (
        <div>
          <StyledProfileContainer src={Profile} alt="profile" onClick={handleProfileClick} />
          {isProfileClicked && (
            <Dropdown padding="1rem" bottom="-10rem" right="0.8rem">
              <StyledDropDownName>뿌슝이</StyledDropDownName>
              <StyledDropDownEmail>cuteppussung@naver.com</StyledDropDownEmail>
              <StyledDropDownMyPage to="/mypage">마이페이지</StyledDropDownMyPage>
              <StyledDropDownLogout>로그아웃</StyledDropDownLogout>
            </Dropdown>
          )}
        </div>
      ) : (
        <div>
          <StyledNonLoginContainer>
            <StyledNonLoginText to="/login">로그인</StyledNonLoginText>
            <StyledColDivider>|</StyledColDivider>
            <StyledNonLoginText to="/signup">회원가입</StyledNonLoginText>
          </StyledNonLoginContainer>
        </div>
      )}
    </StyledContainer>
  );
};
