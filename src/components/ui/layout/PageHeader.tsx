import { useListingContext } from 'provider/listing/Dw1ListingProvider';

const PageHeader = (): JSX.Element => {
  const { t } = useListingContext();
  return (
    <header className="header">
      <h1 className="title">{t('header.title')}</h1>
    </header>
  );
};

export default PageHeader;
