import type { TFunction } from 'i18next';
import { Messages } from 'primereact/messages';
import type { PropsWithChildren, ReactElement, RefObject } from 'react';
import { createContext, useContext, useRef } from 'react';
import { useTranslation } from 'react-i18next';

interface Dw1ListingContextProps {
  t: TFunction<'translation', undefined>;
  message: RefObject<Messages>;
}

const Dw1ListingContext = createContext<Dw1ListingContextProps | undefined>(
  undefined
);

const Dw1ListingProvider = (
  props: PropsWithChildren<Record<string, unknown>>
): ReactElement => {
  const { t } = useTranslation();
  const message = useRef<Messages>(null);

  return (
    <Dw1ListingContext.Provider value={{ t, message }}>
      {props.children}
    </Dw1ListingContext.Provider>
  );
};

function useListingContext(): Dw1ListingContextProps {
  const context = useContext(Dw1ListingContext);
  if (context === undefined) {
    throw new Error('useListingContext must be used within Dw1ListingProvider');
  }
  return context;
}

export { Dw1ListingProvider, useListingContext };
