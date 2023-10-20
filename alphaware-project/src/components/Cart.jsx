import React from "react";
import "./Cart.css";

const Cart = ({ cart, removeFromCart }) => {
  // Calculate the total amount of items in the cart
  const calculateTotalAmount = () => {
    const totalAmount = cart.reduce((total, product) => {
      return total + product.price * (product.quantity || 1); // Assuming each product has a "price" property
    }, 0);
    return totalAmount;
  };
  console.log(cart.length);
  return (
    <div className="cart-container">
      <div className="cartHeadingAndAmount">
        <h2>Shopping Cart</h2>
        <h3 className="totalCartAmount">Total: ${calculateTotalAmount()}</h3>
      </div>
      <div className="cartProducts">
      {cart.map((item) => (
        <div key={item.id}>
          <h3 className="product-title">{item.name}</h3>
          <p className="product-description">{item.description}</p>
          <p className="product-price">Price: ${item.price}</p>
          <p className="product-discount">Discount: ${item.discountAmount}</p>
          <p className="product-rating">Rating: {item.rating}</p>
          <p className="product-quantity">Quantity: {item.quantity}</p>
          <img src={item.imageUrl} alt={item.name} className="product-image" />
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
      </div>
      
    </div>
  );
};

export default Cart;
