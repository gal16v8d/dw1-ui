import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VALUES from '../constants/Dw1Constants';
import Home from './home/Home';
import PageFooter from './ui/layout/PageFooter';
import PageHeader from './ui/layout/PageHeader';
import Dw1Spinner from './ui/Dw1Spinner';

const CardListing = lazy(() => import('./card/CardListing'));
const ElementListing = lazy(() => import('./element/ElementListing'));
const ExchangeListing = lazy(() => import('./exchange/ExchangeListing'));
const GymMachineListing = lazy(() => import('./gymMachine/GymMachineListing'));
const ItemListing = lazy(() => import('./item/ItemListing'));
const LevelListing = lazy(() => import('./level/LevelListing'));
const LocationListing = lazy(() => import('./location/LocationListing'));
const MedalListing = lazy(() => import('./medal/MedalListing'));
const StatusListing = lazy(() => import('./status/StatusListing'));

const Dw1App = (): JSX.Element => {
  return (
    <>
      <PageHeader />
      <Suspense fallback={<Dw1Spinner />}>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route
              path={VALUES.API_OBJECT.CARD.ROUTE}
              element={<CardListing />}
            />
            <Route
              path={VALUES.API_OBJECT.DIGIMON.ROUTE}
              element={<LevelListing />}
            />
            <Route
              path={VALUES.API_OBJECT.ELEMENT.ROUTE}
              element={<ElementListing />}
            />
            <Route
              path={VALUES.API_OBJECT.EXCHANGE.ROUTE}
              element={<ExchangeListing />}
            />
            <Route
              path={VALUES.API_OBJECT.GYM_MACHINE.ROUTE}
              element={<GymMachineListing />}
            />
            <Route
              path={VALUES.API_OBJECT.ITEM.ROUTE}
              element={<ItemListing />}
            />
            <Route
              path={VALUES.API_OBJECT.LEVEL.ROUTE}
              element={<LevelListing />}
            />
            <Route
              path={VALUES.API_OBJECT.LOCATION.ROUTE}
              element={<LocationListing />}
            />
            <Route
              path={VALUES.API_OBJECT.MACHINE.ROUTE}
              element={<LocationListing />}
            />
            <Route
              path={VALUES.API_OBJECT.MEDAL.ROUTE}
              element={<MedalListing />}
            />
            <Route
              path={VALUES.API_OBJECT.MENU.ROUTE}
              element={<LocationListing />}
            />
            <Route
              path={VALUES.API_OBJECT.MERIT_POINT.ROUTE}
              element={<LocationListing />}
            />
            <Route
              path={VALUES.API_OBJECT.RECRUIT.ROUTE}
              element={<LocationListing />}
            />
            <Route
              path={VALUES.API_OBJECT.STATUS.ROUTE}
              element={<StatusListing />}
            />
            <Route
              path={VALUES.API_OBJECT.TECH.ROUTE}
              element={<LocationListing />}
            />
          </Routes>
        </BrowserRouter>
      </Suspense>
      <br />
      <PageFooter />
    </>
  );
};

export default Dw1App;
