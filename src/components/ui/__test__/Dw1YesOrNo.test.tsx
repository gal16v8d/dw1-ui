import { renderWithBaseProviders, screen } from 'testutils/testutils';
import { Dw1ListingProvider } from 'provider/listing/Dw1ListingProvider';
import Dw1YesOrNo from '../Dw1YesOrNo';

it('should render Badge component and match snapshot', () => {
  const element = renderWithBaseProviders(
    <Dw1ListingProvider>
      <Dw1YesOrNo value />
    </Dw1ListingProvider>
  );
  expect(element.baseElement).toMatchSnapshot();
});

it.each`
  value    | expectedText
  ${true}  | ${'yes'}
  ${false} | ${'no'}
`('should render Badge component and find text', ({ value, expectedText }) => {
  renderWithBaseProviders(
    <Dw1ListingProvider>
      <Dw1YesOrNo value={value} />
    </Dw1ListingProvider>
  );
  const badgeText = screen.getByText(expectedText);
  expect(badgeText).toBeInTheDocument();
});
