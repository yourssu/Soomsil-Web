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
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const StyledDialogContent = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.color.buttonBright};
  box-shadow: 0rem 0rem 0.375rem 0rem rgba(61, 61, 61, 0.2);
  border-radius: 0.5rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 20rem;
  height: 10.75rem;
  padding: 2rem;
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
  /* subtitle/subtitle3 */
  font-family: 'Spoqa Han Sans Neo';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 26px */
  color: ${({ theme }) => theme.color.textSecondary};
  margin-top: 2px;
`;

export const StyledDialogDescription = styled(Dialog.Description)`
  /* body/body3 */
  font-family: 'Spoqa Han Sans Neo';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  color: ${({ theme }) => theme.color.textTertiary};
`;
