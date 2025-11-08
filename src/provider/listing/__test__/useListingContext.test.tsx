import { render, screen } from '@testing-library/react';
import { useListingContext } from '../Dw1ListingContext';
import { Dw1ListingProvider } from '../Dw1ListingProvider';

function TestComponent() {
  const context = useListingContext();
  return <div>{context.t('test.key')}</div>;
}

test('useListingContext throws error when used outside provider', () => {
  expect(() => render(<TestComponent />)).toThrow(
    'useListingContext must be used within a <Dw1ListingProvider>'
  );
});

test('useListingContext provides context value', () => {
  render(
    <Dw1ListingProvider>
      <TestComponent />
    </Dw1ListingProvider>
  );
  expect(screen.getByText('test.key')).toBeDefined();
});
