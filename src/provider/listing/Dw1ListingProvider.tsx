import type { TFunction } from 'i18next';
import { Messages } from 'primereact/messages';
import type { PropsWithChildren, ReactElement, RefObject } from 'react';
import { createContext, useContext, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';

interface Dw1ListingContextProps {
  t: TFunction<'translation', undefined>;
  message: RefObject<Messages>;
}

const Dw1ListingContext = createContext<Dw1ListingContextProps | undefined>(
  undefined
);

const Dw1ListingProvider = ({ children }: PropsWithChildren): ReactElement => {
  const { t } = useTranslation<'translation', undefined>();
  const message = useRef<Messages>(null);
  const contextValue = useMemo(() => ({ t, message }), [t]);

  return (
    <Dw1ListingContext.Provider value={contextValue}>
      {children}
    </Dw1ListingContext.Provider>
  );
};

function useListingContext(): Dw1ListingContextProps {
  const context = useContext(Dw1ListingContext);
  if (context === undefined) {
    throw new Error(
      'useListingContext must be used within a <Dw1ListingProvider>'
    );
  }
  return context;
}

export { Dw1ListingProvider, useListingContext };
