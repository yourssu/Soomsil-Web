import { lazy, Suspense, useEffect, useState } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { ProgressBar } from '@/components/ProgressBar/ProgressBar';

const Search = lazy(() =>
  import('./search/pages/Search/Search').then(({ Search }) => ({
    default: Search,
  }))
);
const DrawerLayout = lazy(() =>
  import('./drawer/components/Layout/Layout').then(({ Layout }) => ({
    default: Layout,
  }))
);
const MyDrawer = lazy(() =>
  import('./drawer/pages/MyDrawer/MyDrawer').then(({ MyDrawer }) => ({
    default: MyDrawer,
  }))
);
const NewRelease = lazy(() =>
  import('./drawer/pages/NewRelease/NewRelease').then(({ NewRelease }) => ({
    default: NewRelease,
  }))
);
const Ranking = lazy(() =>
  import('./drawer/pages/Ranking/Ranking').then(({ Ranking }) => ({
    default: Ranking,
  }))
);
const Register = lazy(() =>
  import('./drawer/pages/Register/Register').then(({ Register }) => ({
    default: Register,
  }))
);
const ServiceDetail = lazy(() =>
  import('./drawer/pages/ServiceDetail/ServiceDetail').then(({ ServiceDetail }) => ({
    default: ServiceDetail,
  }))
);
const StarRanking = lazy(() =>
  import('./drawer/pages/StarRanking/StarRanking').then(({ StarRanking }) => ({
    default: StarRanking,
  }))
);
const Home = lazy(() =>
  import('./home/pages/Home/Home').then(({ Home }) => ({
    default: Home,
  }))
);
const Login = lazy(() =>
  import('./home/pages/Login/Login').then(({ Login }) => ({
    default: Login,
  }))
);
const Mypage = lazy(() =>
  import('./home/pages/Mypage/Mypage').then(({ Mypage }) => ({
    default: Mypage,
  }))
);
const Signup = lazy(() =>
  import('./home/pages/Signup/Signup').then(({ Signup }) => ({
    default: Signup,
  }))
);
const Provider = lazy(() =>
  import('./drawer/pages/Provider/Provider').then(({ Provider }) => ({
    default: Provider,
  }))
);

export const Router = () => {
  const [state, setState] = useState({
    isAnimating: false,
    key: 0,
  });

  useEffect(() => {
    setState((prevState) => ({
      isAnimating: true,
      key: prevState.isAnimating ? prevState.key : prevState.key ^ 1,
    }));
    return () => {
      setState((prevState) => ({
        isAnimating: false,
        key: prevState.isAnimating ? prevState.key : prevState.key ^ 1,
      }));
    };
  }, []);
  return (
    <Suspense
      fallback={
        <ProgressBar
          animationDuration={200}
          incrementDuration={800}
          isAnimating={state.isAnimating}
          minimum={0.8}
        />
      }
    >
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
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
    </Suspense>
  );
};
