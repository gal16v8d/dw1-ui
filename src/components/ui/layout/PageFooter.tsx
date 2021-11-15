import React from 'react';
import VALUES from '../../../constants/Dw1Constants';

const PageFooter = (): JSX.Element => {
  return (
    <footer className="footer">
      <p className="footer__text">
        {VALUES.UI.MAIN_TITLE} by:{' '}
        <a href="https://github.com/gal16v8d">gal16v8d</a>. The source code is
        licensed by:{' '}
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. &copy;
        DW1-Api, {new Date().getFullYear()}.
      </p>
    </footer>
  );
};

export default PageFooter;
