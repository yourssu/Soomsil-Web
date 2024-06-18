import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YDSWrapper } from '@yourssu/design-system-react';
import { YLSWrapper } from '@yourssu/logging-system-react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import './index.css';

const queryClient = new QueryClient();
const baseURL = import.meta.env.VITE_API_YLS_URL;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <YLSWrapper baseURL={baseURL}>
      <YDSWrapper>
        <App />
      </YDSWrapper>
    </YLSWrapper>
  </QueryClientProvider>
);
