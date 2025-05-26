import { API_BASE_CONFIG } from '@/config/ApiBaseConfig';
import type { ReactElement } from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Dw1Sidebar from './ui/Dw1Sidebar';
import Dw1Spinner from './ui/Dw1Spinner';
import PageFooter from './ui/layout/PageFooter';
import PageHeader from './ui/layout/PageHeader';

const Dw1Listing = lazy(() => import('./ui/Dw1Listing'));

const Dw1App = (): ReactElement => {
  return (
    <>
      <PageHeader />
      <Suspense fallback={<Dw1Spinner />}>
        <BrowserRouter>
          <Dw1Sidebar />
          <Routes>
            <Route path={'/'} element={<Home />} />
            {API_BASE_CONFIG.map((v) => (
              <Route
                key={`route-${v.name}`}
                path={v.route}
                element={<Dw1Listing apiObject={v} />}
              />
            ))}
          </Routes>
        </BrowserRouter>
      </Suspense>
      <br />
      <PageFooter />
    </>
  );
};

export default Dw1App;
