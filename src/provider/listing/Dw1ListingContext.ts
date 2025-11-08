import type { TFunction } from 'i18next';
import { Messages } from 'primereact/messages';
import type { RefObject } from 'react';
import { createContext, useContext } from 'react';

interface Dw1ListingContextProps {
  t: TFunction<'translation', undefined>;
  message: RefObject<Messages>;
}

export const Dw1ListingContext = createContext<
  Dw1ListingContextProps | undefined
>(undefined);

export const useListingContext = (): Dw1ListingContextProps => {
  const context = useContext(Dw1ListingContext);
  if (context === undefined) {
    throw new Error(
      'useListingContext must be used within a <Dw1ListingProvider>'
    );
  }
  return context;
};
