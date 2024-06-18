import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';

import HomePage, { productsLoader } from './pages/HomePage.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import ShopPage from './pages/ShopPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import CartPage from './pages/CartPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} loader={productsLoader} />
      <Route path="/shop" element={<ShopPage />} loader={productsLoader} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
