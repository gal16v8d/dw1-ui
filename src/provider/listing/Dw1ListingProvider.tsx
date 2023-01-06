import React from 'react';
import { Messages } from 'primereact/messages';
import { useTranslation } from 'react-i18next';

interface Dw1ListingContextProps {
  // FIXME
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any;
  message: React.RefObject<Messages>;
}

const Dw1ListingContext = React.createContext<
  Dw1ListingContextProps | undefined
>(undefined);

const Dw1ListingProvider = (
  props: React.PropsWithChildren<Record<string, unknown>>
): JSX.Element => {
  const { t } = useTranslation();
  const message = React.useRef<Messages>(null);

  return (
    <Dw1ListingContext.Provider value={{ t, message }}>
      {props.children}
    </Dw1ListingContext.Provider>
  );
};

function useListingContext(): Dw1ListingContextProps {
  const context = React.useContext(Dw1ListingContext);
  if (context === undefined) {
    throw new Error('useListingContext must be used within Dw1ListingProvider');
  }
  return context;
}

export { Dw1ListingProvider, useListingContext };
