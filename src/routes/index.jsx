import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { RootWrapperComponent } from 'RootWrapperComponent';
import { Layout } from 'components/Layout';
import { PublicRouter } from './publicRouter';
import { Login } from 'pages/Login';
import { Registration } from 'pages/Registration';
import { PrivateRouter } from './privateRouter';
import { PrivateServiceComponent } from 'PrivateServiceComponent';
import { Home } from 'pages/Home';
import { Cart } from 'pages/Cart';
import { Product } from 'pages/Product';
import { NotFound } from 'pages/NotFound';

export const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<RootWrapperComponent />}>
        <Route element={<Layout />}>
          <Route element={<PublicRouter />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
          </Route>
          <Route element={<PrivateRouter />}>
            <Route element={<PrivateServiceComponent />}>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/products/:id" element={<Product />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
