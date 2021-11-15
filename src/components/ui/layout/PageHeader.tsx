import React from 'react';
import VALUES from '../../../constants/Dw1Constants';

const PageHeader = (): JSX.Element => {
  return (
    <header className="header">
      <h1 className="title">{VALUES.UI.MAIN_TITLE}</h1>
    </header>
  );
};

export default PageHeader;
