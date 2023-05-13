import { Dw1ListingProvider } from '@/provider/listing/Dw1ListingProvider';
import { renderWithBaseProviders, screen } from '@/testutils/testutils';
import PageHeader from '../PageHeader';

test('renders layout footer app', () => {
  renderWithBaseProviders(
    <Dw1ListingProvider>
      <PageHeader />
    </Dw1ListingProvider>
  );
  const headerAppTitle = screen.getByText(/Digimon World 1 - Wiki/i);
  expect(headerAppTitle).toBeDefined();
});
