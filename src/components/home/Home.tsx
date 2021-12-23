import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <>
      <div style={{ background: 'white' }}>{t('home.text')}</div>
    </>
  );
};

export default Home;
