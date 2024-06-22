import * as Dialog from '@radix-ui/react-dialog';
import { useRecoilState } from 'recoil';

import { DIALOG } from '@/constants/dialog.constant.tsx';
import { DialogState } from '@/recoil/DialogState';

import { StyledDialogContent, StyledDialogOverlay } from './CustomDialog.style';

export const CustomDialog = () => {
  const [dialog, setDialog] = useRecoilState(DialogState);

  const handleClose = () => {
    setDialog(null);
  };

  return (
    <>
      {dialog && (
        <Dialog.Root modal={true} open={dialog.open} onOpenChange={handleClose}>
          <Dialog.Portal>
            <StyledDialogOverlay />
            <StyledDialogContent>{DIALOG[dialog.type]}</StyledDialogContent>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </>
  );
};
