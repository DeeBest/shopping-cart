import ProductCard from './ProductCard';
import { useOutletContext } from 'react-router-dom';

const ProductsList = ({ addedItemNotification }) => {
  const { products } = useOutletContext();

  return (
    <>
      <div className="products-cards-container">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              imgUrl={product.image}
              title={product.title}
              price={product.price}
              product={product}
              addedItemNotification={addedItemNotification}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductsList;
