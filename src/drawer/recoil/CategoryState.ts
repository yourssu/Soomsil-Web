import { atom } from 'recoil';

import persistAtom from './persistAtom';

export const CategoryState = atom<string>({
  key: 'CategoryState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
