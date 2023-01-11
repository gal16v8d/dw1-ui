import { API_BASE_CONFIG } from 'config/ApiBaseConfig';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Dw1Sidebar from './ui/Dw1Sidebar';
import Dw1Spinner from './ui/Dw1Spinner';
import PageFooter from './ui/layout/PageFooter';
import PageHeader from './ui/layout/PageHeader';

const BaseListing = lazy(() => import('./base/BaseListing'));

const Dw1App = (): JSX.Element => {
  return (
    <>
      <PageHeader />
      <Suspense fallback={<Dw1Spinner />}>
        <BrowserRouter>
          <Dw1Sidebar />
          <Routes>
            <Route path={'/'} element={<Home />} />
            {API_BASE_CONFIG.map((v) => {
              return (
                <Route
                  key={`route-${v.name}`}
                  path={v.route}
                  element={<BaseListing apiObject={v} />}
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      </Suspense>
      <br />
      <PageFooter />
    </>
  );
};

export default Dw1App;
