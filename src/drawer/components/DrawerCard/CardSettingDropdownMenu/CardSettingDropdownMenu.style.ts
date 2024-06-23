import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { css, styled } from 'styled-components';

export const StyledSettingDropdownContent = styled(DropdownMenu.Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 6.5rem;
  padding: 1rem 0.75rem;

  border: 1px solid ${({ theme }) => theme.color.borderThin};
  border-radius: 0.25rem;
  box-shadow: 0px 1px 3px 0px rgba(107, 114, 128, 0.4);
`;

export const StyledSettingDropdownItem = styled(DropdownMenu.Item)`
  ${({ theme }) => css`
    ${theme.typo.button4}
    color: ${theme.color.textSecondary};
    &:hover {
      color: ${theme.color.textPointed};
    }
  `}
`;
