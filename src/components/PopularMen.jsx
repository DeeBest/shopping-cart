import PopularItems from './PopularItems';
import { useOutletContext } from 'react-router-dom';

const PopularMen = () => {
  const { products } = useOutletContext();

  const menClothing = products.filter(
    (product) => product.category === `men's clothing`
  );

  const popularMen = menClothing.splice(0, 2);

  return <PopularItems heading="Popular In Men" popularItems={popularMen} />;
};

export default PopularMen;
