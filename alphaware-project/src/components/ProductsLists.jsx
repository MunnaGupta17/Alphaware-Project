import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./ProductsLists.css";

const ProductsLists = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, quantity) => {
    console.log("hello",productId, quantity);
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
      
    }));
  };

  useEffect(() => {
    // Inside the effect, fetch data
    setIsLoading(true);

    axios
      .post(
        "https://cors-anywhere.herokuapp.com/http://3.7.252.58:4001/product/getAllProduct",
        {
          limit: 100,
          page: 0,
          search: "",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Cookie:
              "connect.sid=s%253AC9UlQ9M1W1aslddIqBNrrk68Yx4GleaF.OyLqPkC%252FpbJKf070EG6KIJoS70bHaP5GOYXBXBV6hG8",
          },
        }
      )
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setIsLoading(false);
      });
  }, []); // An empty dependency array means this effect runs once, similar to componentDidMount.

  return (
    <div className="product-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        products.map((product) => (
          <div key={product.id} className="product-card">
            <h3 className="product-title">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">Price: ${product.price}</p>
            <p className="product-discount">
              Discount: ${product.discountAmount}
            </p>
            <p className="product-rating">Rating: {product.rating}</p>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="product-image"
            />
            <div className="product-actions">
            <select
              value={quantities[product._id] || 0}
              onChange={(e) => handleQuantityChange(product._id, e.target.value)}
            >
              {Array.from({ length: 10 }, (_, index) => (
                <option key={index} value={index}>
                  {index}
                </option>
              ))}
            </select>
              <button
                onClick={() =>
                  addToCart({ ...product, quantity: quantities[product._id] })
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductsLists;
