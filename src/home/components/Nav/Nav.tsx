import { useEffect, useRef, useState } from 'react';

import { useRecoilValue, useSetRecoilState } from 'recoil';

import Profile from '@/assets/home/profile.svg';
import { Dropdown } from '@/components/Dropdown/Dropdown';
import { LogInState } from '@/home/recoil/LogInState';
import { UserState } from '@/home/recoil/UserState';
import { api } from '@/service/TokenService';

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
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const currentUser = useRecoilValue(UserState);

  const setUserState = useSetRecoilState(UserState);
  const setLogInState = useSetRecoilState(LogInState);

  const handleProfileClick = () => {
    setIsProfileClicked((prev) => !prev);
  };

  const handleLogout = () => {
    api.logout();
    setUserState(null);
    setLogInState(false);
    return;
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsProfileClicked(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <StyledContainer>
      {isLoggedIn ? (
        <div ref={dropdownRef}>
          <StyledProfileContainer src={Profile} alt="profile" onClick={handleProfileClick} />
          {isProfileClicked && currentUser && (
            <Dropdown padding="1rem" bottom="-10rem" right="0">
              <StyledDropDownName>{currentUser.nickName}</StyledDropDownName>
              <StyledDropDownEmail>{currentUser.email}</StyledDropDownEmail>
              <StyledDropDownMyPage to="/mypage">마이페이지</StyledDropDownMyPage>
              <StyledDropDownLogout onClick={handleLogout}>로그아웃</StyledDropDownLogout>
            </Dropdown>
          )}
        </div>
      ) : (
        <StyledNonLoginContainer>
          <StyledNonLoginText to="/login">로그인</StyledNonLoginText>
          <StyledColDivider>|</StyledColDivider>
          <StyledNonLoginText to="/signup">회원가입</StyledNonLoginText>
        </StyledNonLoginContainer>
      )}
    </StyledContainer>
  );
};
