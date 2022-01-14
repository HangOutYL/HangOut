import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import { useContext } from "react";
import CartContext from "../../../Context/CartContext";

const Product = ({ id, title, image, price, category }) => {
  const { setCart, cart, setCartAmount, cartAmount } = useContext(CartContext);

  const addedToCart = () => {
    const cartProduct = cart.find((p) => p.id === id);
    if (!cartProduct) {
      const newCartProduct = {
        id,
        title,
        image,
        price,
        category,
        amount: 1,
      };
      setCart([...cart, newCartProduct]);
      setCartAmount(cartAmount + 1);
      console.log(cartAmount);
    } else {
      cartProduct.amount = cartProduct.amount + 1;
      setCartAmount(cartAmount + 1);
      console.log(cartAmount);
    }
    // debugger;
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
