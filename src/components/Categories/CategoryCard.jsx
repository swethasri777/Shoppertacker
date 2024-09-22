import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CategoryCard = ({ product, index }) => {
  const { addToCart, cartItems, removeFromCart } = useContext(CartContext);

  const isItemInCart = cartItems.some((item) => item.id === product.id);

  const handleCartButton = () => {
    if (isItemInCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="deal card mx-2" key={index}>
      <div className="deal-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="card-body">
        <h3>{product.name}</h3>
        <p>Price: {product.price}</p>
        <p>{product.description}</p>
        <button className="cart-button" onClick={handleCartButton}>
          {isItemInCart ? 'Remove from Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;