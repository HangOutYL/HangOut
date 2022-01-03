import React from "react";
import { Link } from "react-router-dom";
import Coffee1 from "../../../views/CoffeeImage1.png";
import "./Product.css";

const Product = () => {
  return (
    <div className="Card">
      <Link to="/products/:id" className="Link">
        <img src={Coffee1} alt="CoffeeImage" className="CoffeeImage" />
        <span className="Text">Dalgona Matcha</span>
      </Link>
      <div className="PriceAndCart">
        <span className="Price">$1.99</span>
        <button className="AddToCart">+</button>
      </div>
    </div>
  );
};

export default Product;
