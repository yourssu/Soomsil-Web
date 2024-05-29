import { atom } from 'recoil';

import { DialogData } from '@/types/dialog.type';

export const DialogState = atom<DialogData | null>({
  key: 'DialogState',
  default: null,
});
