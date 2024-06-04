import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 17rem;
  height: 7.75rem;
`;

export const StyledIconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 1.5rem;
  height: 1.5rem;
`;

export const StyledDialogTitle = styled(Dialog.Title)`
  ${({ theme }) => theme.typo.subtitle3}
  color: ${({ theme }) => theme.color.textSecondary};
  margin-top: 2px;
`;

export const StyledDialogDescription = styled(Dialog.Description)`
  ${({ theme }) => theme.typo.body3}
  color: ${({ theme }) => theme.color.textTertiary};
  margin: 2px 0 16px 0;
`;
