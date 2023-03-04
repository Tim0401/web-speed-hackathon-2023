import type { FC } from 'react';
import { lazy } from 'react';
import * as Router from 'react-router-dom';

import { useScrollToTop } from './hooks';

const Top = lazy(() => import('../../../pages/Top').then((module) => ({ default: module.Top })));
const ProductDetail = lazy(() => import('../../../pages/ProductDetail').then((module) => ({ default: module.ProductDetail })));
const OrderComplete = lazy(() => import('../../../pages/OrderComplete').then((module) => ({ default: module.OrderComplete })));
const Order = lazy(() => import('../../../pages/Order').then((module) => ({ default: module.Order })));
const NotFound = lazy(() => import('../../../pages/NotFound').then((module) => ({ default: module.NotFound })));

export const Routes: FC = () => {
  useScrollToTop();

  return (
    <Router.Routes>
      <Router.Route element={<Top />} path="/" />
      <Router.Route element={<ProductDetail />} path="/product/:productId" />
      <Router.Route element={<Order />} path="/order" />
      <Router.Route element={<OrderComplete />} path="/order/complete" />
      <Router.Route element={<NotFound />} path="*" />
    </Router.Routes>
  );
};
