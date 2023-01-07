import { renderWithBaseProviders, screen } from 'testutils/testutils';
import App from '../App';

test('renders main app', () => {
  renderWithBaseProviders(<App />);
  const footerElement = screen.getByText(/gal16v8d/i);
  expect(footerElement).toBeInTheDocument();
});
