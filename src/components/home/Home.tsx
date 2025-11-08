import kofiLogo from '@/assets/home/cup-border.png';
import homeImage from '@/assets/home/dw1_ps1.png';
import { useListingContext } from '@/provider/listing/Dw1ListingContext';
import { Image } from 'primereact/image';
import type { ReactElement } from 'react';
import './Home.css';

const Home = (): ReactElement => {
  const { t } = useListingContext();
  return (
    <div className="home-container">
      <header className="header">
        <h3 className="h3">{t('home.text')}</h3>
      </header>
      <Image src={homeImage} alt="Dw1 Image" width="500" />
      <a
        title={t('home.support_me')}
        href={import.meta.env.VITE_KOFI_TARGET}
        className="kofi-button"
        style={{ backgroundColor: '#000' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={kofiLogo || 'https://storage.ko-fi.com/cdn/cup-border.png'}
          alt="Ko-fi Cup Border"
          width="20"
        />
        {t('home.support_me')}
      </a>
    </div>
  );
};

export default Home;
