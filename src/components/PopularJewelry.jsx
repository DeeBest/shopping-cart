import PopularItems from './PopularItems';

const PopularJewelry = ({ products }) => {
  const jewelry = products.filter((product) => product.category === `jewelery`);

  const popularJewelry = jewelry.splice(0, 2);

  return (
    <PopularItems heading="Popular In Jewelry" popularItems={popularJewelry} />
  );
};

export default PopularJewelry;
