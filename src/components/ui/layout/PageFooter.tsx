import { useListingContext } from '@/provider/listing/Dw1ListingContext';
import type { ReactElement } from 'react';

const PageFooter = (): ReactElement => {
  const { t } = useListingContext();
  return (
    <footer className="footer">
      <p className="footer__text">
        {t('header.title')} {t('footer.by')}{' '}
        <a href="https://github.com/gal16v8d">gal16v8d</a>.{' '}
        {t('footer.licence')}{' '}
        <a href="https://opensource.org/licenses/mit-license.php">MIT</a>.
        &copy; DW1-Api, {new Date().getFullYear()}.
      </p>
    </footer>
  );
};

export default PageFooter;
