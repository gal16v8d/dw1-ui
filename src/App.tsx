import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './App.css';
import Dw1App from './components/Dw1App';
import { Dw1ListingProvider } from './provider/listing/Dw1ListingProvider';

const App: React.FC = () => {
  console.log(`Running DW1 UI Version: ${process.env.REACT_APP_VERSION}`);
  const queryClient = new QueryClient();

  return (
    <div
      style={{
        backgroundImage: `url(/assets/img/background.png)`,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Dw1ListingProvider>
          <Dw1App />
        </Dw1ListingProvider>
        {process.env.NODE_ENV === 'development' && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </QueryClientProvider>
    </div>
  );
};

export default App;
