import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import Dw1App from 'components/Dw1App';
import { Dw1ListingProvider } from 'provider/listing/Dw1ListingProvider';
import React from 'react';
import './App.css';

const App: React.FC = () => {
  console.log(`Running DW1 UI Version: ${process.env.REACT_APP_VERSION}`);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // Api is not updated so often, so this can be Infinity
        // to avoid multiple fetch to Db, and avoid to consume a lot of
        // railway backend free tier
        cacheTime: Infinity,
      },
    },
  });
  const persister = createSyncStoragePersister({
    storage: window.localStorage,
  });

  return (
    <div
      style={{
        backgroundImage: `url(/assets/img/background.png)`,
      }}
    >
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister }}
      >
        <Dw1ListingProvider>
          <Dw1App />
        </Dw1ListingProvider>
        {process.env.NODE_ENV === 'development' && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </PersistQueryClientProvider>
    </div>
  );
};

export default App;
