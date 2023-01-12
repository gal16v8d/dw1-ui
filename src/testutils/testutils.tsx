import { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { render as rltRender } from '@testing-library/react';
import i18n from 'config/i18n/languageConfig';
import { I18nextProvider } from 'react-i18next';

const renderWithBaseProviders = (ui: ReactElement) => {
  return rltRender(
    <QueryClientProvider client={new QueryClient()}>
      <I18nextProvider i18n={i18n}>{ui}</I18nextProvider>
    </QueryClientProvider>
  );
};

export * from '@testing-library/react';
export { renderWithBaseProviders };
