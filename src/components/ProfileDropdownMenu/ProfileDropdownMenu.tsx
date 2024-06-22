import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Link } from 'react-router-dom';

import { useResetUserInfo } from '@/hooks/useResetUserInfo';

import {
  StyledProfileDropdownContent,
  StyledProfileDropdownEmail,
  StyledProfileDropdownItem,
  StyledProfileDropdownNickname,
} from './ProfileDropdownMenu.style';

interface ProfileDropdownMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  nickname: string;
  email: string;
  children: React.ReactNode;
}

export const ProfileDropdownMenu = ({
  open,
  onOpenChange,
  nickname,
  email,
  children,
}: ProfileDropdownMenuProps) => {
  const resetUserInfo = useResetUserInfo();
  const handleLogout = () => {
    resetUserInfo();
    return;
  };

  return (
    <DropdownMenu.Root open={open} onOpenChange={onOpenChange}>
      {children}
      <DropdownMenu.Portal>
        <StyledProfileDropdownContent align="end" sideOffset={16}>
          <div>
            <StyledProfileDropdownNickname>{nickname}</StyledProfileDropdownNickname>
            <StyledProfileDropdownEmail>{email}</StyledProfileDropdownEmail>
          </div>
          <StyledProfileDropdownItem asChild>
            <Link to="/mypage">마이페이지</Link>
          </StyledProfileDropdownItem>
          <StyledProfileDropdownItem asChild>
            <button type="button" onClick={handleLogout}>
              로그아웃
            </button>
          </StyledProfileDropdownItem>
        </StyledProfileDropdownContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

ProfileDropdownMenu.Trigger = DropdownMenu.Trigger;
