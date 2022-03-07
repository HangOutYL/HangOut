import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import { useContext } from "react";
import CartContext from "../../../Context/CartContext";

const Product = ({ id, title, image, price, category, milk }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="Card">
      <Link to={`/products/${id}`} className="Link">
        <img src={image} alt="CoffeeImage" className="CoffeeImage" />
        <span className="Text">{title}</span>
      </Link>
      <div className="PriceAndCart">
        <span className="Price">{price}</span>
        <button
          className="AddToCart"
          onClick={() => addToCart(id, title, image, price, category, milk)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Product;
