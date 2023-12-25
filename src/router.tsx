import { Route, Routes } from 'react-router-dom';

import { Drawer } from './drawer/Drawer';
import { Home } from './home/Home';
import { Search } from './search/Search';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/drawer" element={<Drawer />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};
