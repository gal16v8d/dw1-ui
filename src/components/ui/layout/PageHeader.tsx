import React from 'react';
import { useTranslation } from 'react-i18next';

const PageHeader = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <header className="header">
      <h1 className="title">{t('header.title')}</h1>
    </header>
  );
};

export default PageHeader;
