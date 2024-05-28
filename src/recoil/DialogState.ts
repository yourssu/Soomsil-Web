import { atom } from 'recoil';

import { DialogData } from '@/types/dialog.type';

import { persistAtom } from './persistAtom';

export const DialogState = atom<DialogData | null>({
  key: 'DialogState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
