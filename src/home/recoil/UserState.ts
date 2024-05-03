import { atom } from 'recoil';

import { UserData } from '@/home/types/user.type';

import { persistAtom } from './persistAtom';

export const UserState = atom<UserData | null>({
  key: 'UserState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
