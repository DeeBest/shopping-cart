import PopularItems from './PopularItems';

const PopularElectronics = ({ products }) => {
  const electronics = products.filter(
    (product) => product.category === `electronics`
  );

  const PopularElectronics = electronics.splice(0, 2);

  return (
    <PopularItems
      heading="Popular In Electronics"
      popularItems={PopularElectronics}
    />
  );
};

export default PopularElectronics;
