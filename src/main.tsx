import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YDSWrapper } from '@yourssu/design-system-react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import './index.css';
import './normalize.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <YDSWrapper>
      <App />
    </YDSWrapper>
  </QueryClientProvider>
);
