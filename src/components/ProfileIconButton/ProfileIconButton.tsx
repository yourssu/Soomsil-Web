import React, { useState } from 'react';

import { IcPersoncircleLine } from '@yourssu/design-system-react';

import { useGetUserData } from '@/home/hooks/useGetUserData';

import { ProfileDropdownMenu } from '../ProfileDropdownMenu/ProfileDropdownMenu';

import { StyledIconButton } from './ProfileIconButton.style';

interface ProfileIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  size: string;
}

export const ProfileIconButton = ({ color, size, ...props }: ProfileIconButtonProps) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const { data: currentUser } = useGetUserData();

  const handleClickProfile = () => {
    setOpenDropdown((prev) => !prev);
  };

  return (
    <StyledIconButton {...props} onClick={handleClickProfile}>
      {currentUser && (
        <ProfileDropdownMenu
          open={openDropdown}
          onOpenChange={setOpenDropdown}
          nickname={currentUser.nickName}
          email={currentUser.email}
        >
          <ProfileDropdownMenu.Trigger asChild>
            <IcPersoncircleLine color={color} size={size} />
          </ProfileDropdownMenu.Trigger>
        </ProfileDropdownMenu>
      )}
    </StyledIconButton>
  );
};
