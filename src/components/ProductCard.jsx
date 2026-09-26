import "./ProductCard.css";

function ProductCard({
  name,
  price,
  image,
  description,
  onAddToCart,
}) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />

      <div className="product-info">
        <h2>{name}</h2>

        <p className="product-description">
          {description}
        </p>

        <p className="product-price">
          ${price}
        </p>

        <button
          className="add-to-cart-button"
          onClick={onAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;