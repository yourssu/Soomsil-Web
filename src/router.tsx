import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout as DrawerLayout } from './drawer/components/Layout/Layout';
import { MyDrawer } from './drawer/pages/MyDrawer/MyDrawer';
import { NewRelease } from './drawer/pages/NewRelease/NewRelease';
import { Provider } from './drawer/pages/Provider/Provider';
import { Ranking } from './drawer/pages/Ranking/Ranking';
import { Register } from './drawer/pages/Register/Register';
import { ServiceDetail } from './drawer/pages/ServiceDetail/ServiceDetail';
import { StarRanking } from './drawer/pages/StarRanking/StarRanking';
import { HomeLayout } from './home/components/HomeLayout/HomeLayout';
import { Login } from './home/components/login/Login';
import { Home } from './home/pages/Home/Home';
import { Mypage } from './home/pages/Mypage/Mypage';
import { Search } from './search/pages/Search/Search';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Route>
      <Route path="/mypage" element={<Mypage />}></Route>
      <Route path="/drawer" element={<DrawerLayout />}>
        <Route index element={<Navigate to="rankings" replace />}></Route>
        <Route path="services/:serviceId" element={<ServiceDetail />} />
        <Route path="rankings" element={<Ranking />} />
        <Route path="register" element={<Register />} />
        <Route path="myDrawers" element={<MyDrawer />} />
        <Route path="/drawer/newRelease" element={<NewRelease />} />
        <Route path="/drawer/starRanking" element={<StarRanking />} />
        <Route path=":providerId" element={<Provider />} />
      </Route>
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};
