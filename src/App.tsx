import Dw1App from '@/components/Dw1App';
import { Dw1ListingProvider } from '@/provider/listing/Dw1ListingProvider';
import { useDw1Store } from '@/state/Dw1Store';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import React from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import './App.css';

const App: React.FC = () => {
  console.log(`Running DW1 UI Version: ${import.meta.env.VITE_APP_VERSION}`);
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
  const { updateDebugState, debugEnabled } = useDw1Store();
  useHotkeys('shift+d', () => updateDebugState());

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
        {(import.meta.env.DEV || debugEnabled) && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </PersistQueryClientProvider>
    </div>
  );
};

export default App;
