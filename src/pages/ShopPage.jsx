import { useLoaderData } from 'react-router-dom';
import Shop from '../components/Shop';

const ShopPage = () => {
  const products = useLoaderData();
  return (
    <>
      <Shop products={products} />
    </>
  );
};

export default ShopPage;
