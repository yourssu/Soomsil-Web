import { atom } from 'recoil';

import { persistAtom } from './persistAtom';

export const LogInState = atom<boolean>({
  key: 'LogInState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
