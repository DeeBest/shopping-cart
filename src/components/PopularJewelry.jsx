import PopularItems from './PopularItems';
import { useOutletContext } from 'react-router-dom';

const PopularJewelry = () => {
  const { products } = useOutletContext();

  const jewelry = products.filter((product) => product.category === `jewelery`);

  const popularJewelry = jewelry.splice(0, 2);

  return (
    <PopularItems heading="Popular In Jewelry" popularItems={popularJewelry} />
  );
};

export default PopularJewelry;
