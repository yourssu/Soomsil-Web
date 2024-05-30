import React, { useState } from 'react';

import { IcPersoncircleLine } from '@yourssu/design-system-react';
import { useRecoilValue } from 'recoil';

import { UserState } from '@/home/recoil/UserState';

import { ProfileDropdownMenu } from '../ProfileDropdownMenu/ProfileDropdownMenu';

import { StyledIconButton } from './ProfileIconButton.style';

interface ProfileIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  size: string;
}

export const ProfileIconButton = ({ color, size, ...props }: ProfileIconButtonProps) => {
  const currentUser = useRecoilValue(UserState);
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleClickProfile = () => {
    setOpenDropdown((prev) => !prev);
  };

  return (
    <StyledIconButton onClick={handleClickProfile} {...props}>
      <ProfileDropdownMenu
        open={openDropdown}
        onOpenChange={setOpenDropdown}
        nickname={currentUser!.nickName}
        email={currentUser!.email}
      >
        <ProfileDropdownMenu.Trigger asChild>
          <IcPersoncircleLine color={color} size={size} />
        </ProfileDropdownMenu.Trigger>
      </ProfileDropdownMenu>
    </StyledIconButton>
  );
};
