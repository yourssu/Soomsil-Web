import * as Dialog from '@radix-ui/react-dialog';
import styled, { keyframes } from 'styled-components';

import { Z_INDEX } from '@/constants/zIndex.constant';

const overlayShow = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const StyledDialogOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  z-index: ${Z_INDEX.dialog};
`;

export const StyledDialogContent = styled(Dialog.Content)`
  background-color: ${({ theme }) => theme.color.buttonBright};
  box-shadow: 0rem 0rem 0.375rem 0rem rgba(61, 61, 61, 0.2);
  border-radius: 0.5rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 1.5rem;
  z-index: ${Z_INDEX.dialog};
`;
