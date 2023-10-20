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
    if (product.quantity > 0) {
      // Quantity is greater than 0, allow addition to the cart
      setCart([...cart, product]);
    } else {
      // Quantity is 0, display an alert
      alert("Please select a quantity greater than 0.");
    }
    
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item._id !== product._id);
    setCart(updatedCart);
  };


  return (
    <div className="App">
      <Navbar cart={cart} showCart={() => setCartVisible(!isCartVisible)} removeFromCart={removeFromCart} />
      {isCartVisible == false && <ProductsLists addToCart={addToCart}/>}
      {isCartVisible && <Cart cart={cart} removeFromCart={removeFromCart} />}
    </div>
  );
}

export default App;
