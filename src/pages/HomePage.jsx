import { useLoaderData } from 'react-router-dom';

import Home from '../components/Home';

const HomePage = () => {
  const products = useLoaderData();

  return (
    <>
      <Home products={products} />
    </>
  );
};

export default HomePage;
