import { Dw1ListingProvider } from '@/provider/listing/Dw1ListingProvider';
import { renderWithBaseProviders, screen } from '@/testutils/testutils';
import PageFooter from '../PageFooter';

test('renders layout footer app', () => {
  renderWithBaseProviders(
    <Dw1ListingProvider>
      <PageFooter />
    </Dw1ListingProvider>
  );
  const footerAppName = screen.getByText(/DW1-Api/i);
  const footerMit = screen.getByText(/MIT/i);
  expect(footerAppName).toBeDefined();
  expect(footerMit).toBeDefined();
});
