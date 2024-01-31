import { Route, Routes } from 'react-router-dom';

import { Drawer } from './drawer/Drawer';
import { Layout as DrawerLayout } from './drawer/components/Layout/Layout';
import { Home } from './home/Home';
import { Search } from './search/Search';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/drawer" element={<DrawerLayout />}>
        <Route path="" element={<Drawer />} />
      </Route>
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};
