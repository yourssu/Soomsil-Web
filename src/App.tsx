import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { CustomDialog } from './components/Dialog/CustomDialog';
import { Router } from './router';

export const App = () => {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Router />
          <CustomDialog />
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
};
