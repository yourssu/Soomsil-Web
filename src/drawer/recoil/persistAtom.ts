import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'drawer',
  storage: sessionStorage,
});

export default persistAtom;
