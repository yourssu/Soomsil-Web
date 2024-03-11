import * as Dialog from '@radix-ui/react-dialog';
import styled, { keyframes } from 'styled-components';

const overlayShow = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const StyledDialogOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 0.3s;
`;

export const StyledDialogContent = styled(Dialog.Content)`
  background: ${({ theme }) => theme.color.bgNormal};
  border: 1px solid ${({ theme }) => theme.color.borderNormal};
  border-radius: 1rem;

  width: 23.75rem;
  padding: 1.5rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${overlayShow} 0.3s;
`;

export const StyledContentInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
`;

export const StyledPpussungIcon = styled.img`
  width: 6rem;
`;

export const StyledDialogTitle = styled(Dialog.Title)`
  padding: 0.75rem 0rem;
  color: ${({ theme }) => theme.color.textPrimary};
  ${({ theme }) => theme.typo.body1};
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
