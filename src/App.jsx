import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import ShopPage from './pages/ShopPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import CartPage from './pages/CartPage.jsx';

// Define the base name for the router
const basename = '/shopping-cart';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  ),
  { basename } // Pass the basename here
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
