import * as Dialog from '@radix-ui/react-dialog';
import { useRecoilState } from 'recoil';

import { LoginDialog } from '@/components/Dialog/LoginDialog/LoginDialog';
import { DialogState } from '@/recoil/DialogState';
import { DialogType } from '@/types/dialog.type';

import { StyledDialogContent, StyledDialogOverlay } from './CustomDialog.style';

const DIALOG: Record<DialogType, React.ReactNode> = {
  login: <LoginDialog />,
  logout: <></>,
  service_remove: <></>,
};

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
