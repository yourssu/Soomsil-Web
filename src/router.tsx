import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout as DrawerLayout } from './drawer/components/Layout/Layout';
import { Ranking } from './drawer/pages/Ranking/Ranking';
import { Register } from './drawer/pages/Register';
import { MyDrawer } from './drawer/pages/MyDrawer';
import { HomeLayout } from './home/components/HomeLayout/HomeLayout';
import { Home } from './home/pages/Home';
import { Login } from './home/components/login/Login';
import { Search } from './search/Search';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Route>
      <Route path="/drawer" element={<DrawerLayout />}>
        <Route index element={<Navigate to="rankings" replace />}></Route>
        <Route path="rankings" element={<Ranking />} />
        <Route path="register" element={<Register />} />
        <Route path="myDrawers" element={<MyDrawer />} />
      </Route>
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};
