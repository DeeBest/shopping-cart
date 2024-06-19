import ProductCard from './ProductCard';

const ProductsList = ({ products }) => {
  return (
    <div
      className="products-cards-container"
      style={{
        display: 'flex', // Added display flex to apply flex properties
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            imgUrl={product.image}
            title={product.title}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default ProductsList;
