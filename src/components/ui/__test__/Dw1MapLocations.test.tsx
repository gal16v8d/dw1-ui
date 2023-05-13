import { render, screen } from '@/testutils/testutils';
import Dw1MapLocations from '../Dw1MapLocations';

it.each`
  locations
  ${undefined}
  ${null}
  ${[]}
`('should return null when no locations', ({ locations }) => {
  render(
    <Dw1MapLocations
      locations={locations}
      identifier={'test'}
      additionalClassName={'good-chip'}
    />
  );
  const dataScroller = screen.queryByTestId('ds-test');
  expect(dataScroller).toBeNull();
});

it('datascroller should be present when receive locations', () => {
  render(
    <Dw1MapLocations
      locations={[{ _id: 'af', name: 'Amida Forest' }]}
      identifier={'test'}
      additionalClassName={'good-chip'}
    />
  );
  const dataScroller = screen.queryByTestId('ds-test');
  expect(dataScroller).not.toBeNull();
});
