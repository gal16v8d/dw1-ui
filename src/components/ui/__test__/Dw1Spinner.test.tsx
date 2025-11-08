import { Dw1ListingProvider } from '@/provider/listing/Dw1ListingProvider';
import { renderWithBaseProviders, screen } from '@/testutils/testutils';
import Dw1Spinner from '../Dw1Spinner';

it('should render Spinner component and match snapshot', () => {
  const element = renderWithBaseProviders(
    <Dw1ListingProvider>
      <Dw1Spinner />
    </Dw1ListingProvider>
  );
  expect(element.baseElement).toMatchSnapshot();
});

it('should render Spinner component and able to find by testId', () => {
  renderWithBaseProviders(
    <Dw1ListingProvider>
      <Dw1Spinner />
    </Dw1ListingProvider>
  );
  const byTestId = screen.getByTestId('dw1-spinner');
  expect(byTestId).toBeDefined();
});
