import ProductCard from './ProductCard';

const PopularItems = ({ heading, popularItems }) => {
  return (
    <section className="popular-products-container">
      <h1>{heading}</h1>
      <hr />
      <div className="products-cards-container">
        {popularItems.map((product) => {
          return (
            <ProductCard
              isHome={true}
              key={product.id}
              id={product.id}
              imgUrl={product.image}
              title={product.title}
              price={product.price}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PopularItems;
