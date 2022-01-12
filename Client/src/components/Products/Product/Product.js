import React from "react";
import { Link } from "react-router-dom";
// import Coffee1 from "../../../views/CoffeeImage1.png";
import "./Product.css";
import { useContext } from "react";
import CartContext from "../../../Context/CartContext";

const Product = ({ id, title, image, price, category }) => {
  const { setCount, count, cart } = useContext(CartContext);

  const addedToCart = () => {
    const currentProduct = {
      id,
      title,
      image,
      price,
      category,
      amount: count + 1,
    };
    cart.push(currentProduct);
    setCount(count + 1);
    console.log(cart);
  };

  return (
    <div className="Card">
      <Link to={`/products/${id}`} className="Link">
        <img src={image} alt="CoffeeImage" className="CoffeeImage" />
        <span className="Text">{title}</span>
      </Link>
      <div className="PriceAndCart">
        <span className="Price">{price}</span>
        <button className="AddToCart" onClick={addedToCart}>
          +
        </button>
      </div>
    </div>
  );
};

export default Product;
