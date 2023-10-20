import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductsLists from './components/ProductsLists';
import Cart from "./components/Cart";
import { useState} from 'react';

function App() {

  const [cart, setCart] = useState([]);
  const [isCartVisible, setCartVisible] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // const addToCart = (product) => {
  //   const existingProductIndex = cart.findIndex((item) => item.id === product.id);
  //   if (existingProductIndex !== -1) {
  //     // Product already in cart, update quantity
  //     const updatedCart = [...cart];
  //     updatedCart[existingProductIndex].quantity += 1;
  //     setCart(updatedCart);
  //   } else {
  //     // Product not in cart, add it
  //     setCart([...cart, { ...product, quantity: 1 }]);
  //   }
  // };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item._id !== product._id);
    setCart(updatedCart);
  };
  // const removeFromCart = (productId) => {
  //   // Filter the cart to remove the product with a matching ID
  //   const updatedCart = cart.filter((product) => product.id !== productId);
  //   setCart(updatedCart);
  // };


  return (
    <div className="App">
      <Navbar cart={cart} showCart={() => setCartVisible(!isCartVisible)} removeFromCart={removeFromCart} />
      {isCartVisible == false && <ProductsLists addToCart={addToCart}/>}
      {isCartVisible && <Cart cart={cart} removeFromCart={removeFromCart} />}
    </div>
  );
}

export default App;
