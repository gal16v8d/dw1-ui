import { act, renderWithBaseProviders, screen } from '@/testutils/testutils';
import App from '../App';

test('renders main app', async () => {
  await act(() => renderWithBaseProviders(<App />));
  const footerElement = screen.getByText(/gal16v8d/i);
  expect(footerElement).toBeDefined();
});
