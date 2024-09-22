import { recoilPersist } from 'recoil-persist';

export const { persistAtom } = recoilPersist({
  key: 'drawer',
  storage: sessionStorage,
});
