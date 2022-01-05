import React from "react";
import { Link } from "react-router-dom";
// import Coffee1 from "../../../views/CoffeeImage1.png";
import "./Product.css";

const Product = ({ id, title, image, price }) => {
  return (
    <div className="Card">
      <Link to={`/products/${id}`} className="Link">
        <img src={image} alt="CoffeeImage" className="CoffeeImage" />
        <span className="Text">{title}</span>
      </Link>
      <div className="PriceAndCart">
        <span className="Price">{price}</span>
        <button className="AddToCart">+</button>
      </div>
    </div>
  );
};

export default Product;
