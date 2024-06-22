import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styled, { css } from 'styled-components';

import { Z_INDEX } from '@/constants/zIndex.constant';

export const StyledProfileDropdownContent = styled(DropdownMenu.Content)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: fit-content;
  padding: 1rem 0.75rem;
  gap: 1rem;
  z-index: ${Z_INDEX.dropdown};

  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.color.borderThin};
  background-color: ${({ theme }) => theme.color.bgNormal};
  box-shadow: 0px 1px 3px 0px rgba(107, 114, 128, 0.4);
`;

export const StyledProfileDropdownNickname = styled(DropdownMenu.Item)`
  ${({ theme }) => css`
    ${theme.typo.body1}
    color: ${theme.color.textPrimary};
  `}
`;

export const StyledProfileDropdownEmail = styled(DropdownMenu.Item)`
  ${({ theme }) => css`
    ${theme.typo.caption0}
    color: ${theme.color.textDisabled};
  `}
`;

export const StyledProfileDropdownItem = styled(DropdownMenu.Item)`
  ${({ theme }) => css`
    ${theme.typo.body2}
    color: ${theme.color.textPrimary};
    &: hover {
      color: ${theme.color.textPointed};
    }
  `}
`;
