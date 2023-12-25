import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { Router } from './router';

export const App = () => {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
};
