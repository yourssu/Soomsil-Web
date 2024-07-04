import { DIALOG } from '@/constants/dialog.constant';

export interface DialogData {
  open: boolean;
  type: keyof typeof DIALOG;
  redirectPath?: string | null;
}
