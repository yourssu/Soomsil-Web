import { recoilPersist } from 'recoil-persist';

export const { persistAtom } = recoilPersist({
  key: 'user',
  storage: sessionStorage,
});
