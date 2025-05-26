import { useListingContext } from '@/provider/listing/Dw1ListingProvider';
import type { ReactElement } from 'react';

const PageHeader = (): ReactElement => {
  const { t } = useListingContext();
  return (
    <header className="header">
      <h1 className="title">{t('header.title')}</h1>
    </header>
  );
};

export default PageHeader;
