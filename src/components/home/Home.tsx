import { useListingContext } from 'provider/listing/Dw1ListingProvider';
import { Image } from 'primereact/image';

const Home = (): JSX.Element => {
  const { t } = useListingContext();
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <header className="header">
        <h3 className="h3" style={{ color: 'white' }}>
          {t('home.text')}
        </h3>
      </header>
      <Image src="/assets/img/dw1_ps1.png" alt="Dw1 Image" width="250" />
    </div>
  );
};

export default Home;
