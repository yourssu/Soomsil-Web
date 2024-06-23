import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Link } from 'react-router-dom';

import {
  StyledSettingDropdownContent,
  StyledSettingDropdownItem,
} from './CardSettingDropdownMenu.style';

interface CardSettingDropdownMenuProps {
  productNo: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onClickRemoveButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

export const CardSettingDropdownMenu = ({
  productNo,
  open,
  onOpenChange,
  onClickRemoveButton,
  children,
}: CardSettingDropdownMenuProps) => {
  return (
    <DropdownMenu.Root open={open} onOpenChange={onOpenChange}>
      {children}
      <DropdownMenu.Portal>
        <StyledSettingDropdownContent align="end">
          <StyledSettingDropdownItem asChild>
            <Link
              to={`/drawer/services/${productNo}/edit`}
              onClick={(event) => event.stopPropagation()}
            >
              서비스 수정
            </Link>
          </StyledSettingDropdownItem>
          <StyledSettingDropdownItem asChild>
            <button type="button" onClick={onClickRemoveButton}>
              서비스 삭제
            </button>
          </StyledSettingDropdownItem>
        </StyledSettingDropdownContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

CardSettingDropdownMenu.Trigger = DropdownMenu.Trigger;
