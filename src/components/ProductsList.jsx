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
          <section className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="item-title-container">
              <p>{product.title.slice(0, 50)}...</p>
              <p className="product-price">${product.price}</p>
            </div>
            <button className="add-to-cart-btn">Add To Cart</button>
          </section>
        );
      })}
    </div>
  );
};

export default ProductsList;
