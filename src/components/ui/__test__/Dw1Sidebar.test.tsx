import { Dw1ListingProvider } from 'provider/listing/Dw1ListingProvider';
import { BrowserRouter } from 'react-router-dom';
import {
  fireEvent,
  renderWithBaseProviders,
  screen,
} from 'testutils/testutils';
import Dw1Sidebar from '../Dw1Sidebar';

it('should render Sidebar component, after clicked menu should be present', () => {
  renderWithBaseProviders(
    <Dw1ListingProvider>
      <BrowserRouter>
        <Dw1Sidebar />
      </BrowserRouter>
    </Dw1ListingProvider>
  );
  const sidebarBtn = screen.getByTestId('dw1-sidebar-btn');
  expect(sidebarBtn).toBeInTheDocument();
  fireEvent.click(sidebarBtn);
  const menuDigimon = screen.getByText(/Digimon/i);
  expect(menuDigimon).toBeInTheDocument();
});
