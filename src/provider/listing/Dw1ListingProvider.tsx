import { Messages } from 'primereact/messages';
import type { PropsWithChildren, ReactElement } from 'react';
import { useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Dw1ListingContext } from './Dw1ListingContext';

export const Dw1ListingProvider = ({
  children,
}: PropsWithChildren): ReactElement => {
  const { t } = useTranslation<'translation', undefined>();
  const message = useRef<Messages>(null);
  const contextValue = useMemo(() => ({ t, message }), [t]);

  return (
    <Dw1ListingContext.Provider value={contextValue}>
      {children}
    </Dw1ListingContext.Provider>
  );
};
