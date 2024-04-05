import { useState } from 'react';

import * as DropDownMenu from '@radix-ui/react-dropdown-menu';
import { IcListLine } from '@yourssu/design-system-react';

import { RankingCategory } from '../RankingCategory';

import { StyledIconButton, StyledIconButtonContainer } from './CategoryDropdownMenu.style';

export const CategoryDropdownMenu = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <DropDownMenu.Root open={openDropdown} onOpenChange={setOpenDropdown}>
      <DropDownMenu.Trigger asChild>
        <StyledIconButtonContainer>
          <StyledIconButton>
            <IcListLine width={36} height={36} />
          </StyledIconButton>
        </StyledIconButtonContainer>
      </DropDownMenu.Trigger>
      <DropDownMenu.Portal>
        <DropDownMenu.Content align="end" alignOffset={32}>
          <RankingCategory isSmallDesktop={true} onDropdownOpenChange={setOpenDropdown} />
        </DropDownMenu.Content>
      </DropDownMenu.Portal>
    </DropDownMenu.Root>
  );
};
