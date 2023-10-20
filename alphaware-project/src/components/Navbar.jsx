import React from "react";
import "./Navbar.css";
import cartIcon from "../images/CartIcon.png";

const Navbar = ({ cart, showCart }) => {
  return (
    <div className="NavbarContainer">
      <h1>Alphaware</h1>
      <div className="cartIcon">
      <div className="cart-icon" onClick={showCart}>
        <img src={cartIcon} alt="cart icon" />
        
      </div>
      <div className="cart-count">{cart.length}</div>
      </div>
      
    </div>
  );
};

export default Navbar;
