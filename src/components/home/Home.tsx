import { useListingContext } from 'provider/listing/Dw1ListingProvider';

const Home = (): JSX.Element => {
  const { t } = useListingContext();
  return (
    <>
      <div style={{ background: 'white' }}>{t('home.text')}</div>
    </>
  );
};

export default Home;
