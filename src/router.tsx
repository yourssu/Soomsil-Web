import { lazy, Suspense, useEffect, useState } from 'react';

import { useColorTheme } from '@yourssu/design-system-react';
import { ErrorBoundary } from 'react-error-boundary';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Fallback } from '@/components/Fallback/Fallback';
import { PrivateRoute } from '@/components/PrivateRoute/PrivateRoute';
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
const ServiceRegister = lazy(() =>
  import('./drawer/pages/ServiceRegister/ServiceRegister').then(({ ServiceRegister }) => ({
    default: ServiceRegister,
  }))
);
const ServiceDetail = lazy(() =>
  import('./drawer/pages/ServiceDetail/ServiceDetail').then(({ ServiceDetail }) => ({
    default: ServiceDetail,
  }))
);
const ServiceEdit = lazy(() =>
  import('./drawer/pages/ServiceEdit/ServiceEdit').then(({ ServiceEdit }) => ({
    default: ServiceEdit,
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
const ChangePassword = lazy(() =>
  import('./home/pages/ChangePassword/ChangePassword').then(({ ChangePassword }) => ({
    default: ChangePassword,
  }))
);
const Withdraw = lazy(() =>
  import('./home/pages/Withdraw/Withdraw').then(({ Withdraw }) => ({
    default: Withdraw,
  }))
);
const ResetPassword = lazy(() =>
  import('./home/pages/ResetPassword/ResetPassword').then(({ ResetPassword }) => ({
    default: ResetPassword,
  }))
);

const DrawerSearch = lazy(() =>
  import('./drawer/pages/DrawerSearch/DrawerSearch').then(({ DrawerSearch }) => ({
    default: DrawerSearch,
  }))
);

export const Router = () => {
  const [state, setState] = useState({
    isAnimating: false,
    key: 0,
  });
  const { setTheme } = useColorTheme();

  useEffect(() => {
    setTheme('light');
  }, [setTheme]);

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
    <ErrorBoundary fallbackRender={(fallbackProps) => <Fallback {...fallbackProps} />}>
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
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/resetPassword" element={<ResetPassword />}></Route>
          <Route element={<PrivateRoute />}>
            <Route path="/Mypage" element={<Mypage />}></Route>
            <Route path="/changePassword" element={<ChangePassword />}></Route>
            <Route path="/withdraw" element={<Withdraw />}></Route>
          </Route>
          <Route path="/drawer" element={<DrawerLayout />}>
            <Route index element={<Navigate to="rankings" replace />}></Route>
            <Route path="services/:serviceId/edit" element={<ServiceEdit />} />
            <Route path="services/:serviceId" element={<ServiceDetail />} />
            <Route path="rankings" element={<Ranking />} />
            <Route path="register" element={<ServiceRegister />} />
            <Route element={<PrivateRoute isModalOpen={true} modalPath="/drawer" />}>
              <Route path="myDrawers" element={<MyDrawer />} />
            </Route>
            <Route path="/drawer/newRelease" element={<NewRelease />} />
            <Route path="/drawer/starRanking" element={<StarRanking />} />
            <Route path=":providerId" element={<Provider />} />
            <Route path="/drawer/search" element={<DrawerSearch />} />
          </Route>
          <Route path="/search" element={<Search />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};
