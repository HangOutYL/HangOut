import React, { useContext } from "react";
// import Coffee1 from "../../views/CoffeeImage1.png";
import CouponCode from "../../views/CouponVector.png";
import DashedLine from "../../views/DashedLineVector.png";
import BottomNav from "../../components/BottomNav/BottomNav";
import "./Cart.css";
import CartContext from "../../Context/CartContext";

const Cart = () => {
  const { count, setCount, cart, setCart } = useContext(CartContext);

  const addProduct = () => {
    const [{ id }] = cart;
    const addItem = cart.find((p) => p.id === id);
    addItem.amount = addItem.amount + 1;
    setCount(count + 1);
    console.log(addItem);
  };

  const removeProduct = () => {
    const [{ id }] = cart;
    const removeItem = cart.find((p) => p.id === id);
    if (removeItem.amount > 0) {
      removeItem.amount = removeItem.amount - 1;
      setCount(count - 1);

      console.log(removeItem);
    }
    if (removeItem.amount === 0) {
      const newCart = cart.filter((item) => item.id !== id);
      console.log(newCart);
      setCart(newCart);
    }
  };

  const cartItems = cart.map(
    ({ id, image, title, category, price, amount }) => {
      return (
        <div className="Item" key={id}>
          <div className="Item-Desc">
            <img src={image} alt="item-img" className="item-img" />
            <div className="Item-Detail">
              <span className="Item-Title">{category}</span>
              <span className="Item-Text">{title}</span>
              <span className="Item-Price">${Math.round(price * amount)}</span>
            </div>
          </div>
          <div className="Item-Amount">
            <button className="Item-Minus" onClick={removeProduct}>
              -
            </button>
            <span className="Item-Number">{amount}</span>
            <button className="Item-Plus" onClick={addProduct}>
              +
            </button>
          </div>
        </div>
      );
    }
  );

  return (
    <>
      <div className="Cart">
        <h2 className="Cart-Title">Cart</h2>
        <div className="Cart-Items">{cartItems}</div>
        <div className="DashLine">
          <img src={DashedLine} alt="DashLine" className="DashLine" />
        </div>
        <div className="Coupon">
          <img src={CouponCode} alt="Cart-Coupon" className="Cart-Coupon" />
        </div>
        <div className="Order-Summary">
          <div className="Extra-Charges">
            <div className="Charge-Titles">
              <span className="Delivery">Delivery Charges</span>
              <span className="Taxes">Taxes</span>
            </div>
            <div className="Charge-Prices">
              <span className="Delivery-Price">10$</span>
              <span className="Taxes-Price">3.46$</span>
            </div>
          </div>
          <div className="Order-Total">
            <span className="Grand-Total">Grand Total</span>
            <span className="Total-Price">21.99$</span>
          </div>
        </div>
        <button className="Pay-Btn">
          <span className="Pay-Text">PAY NOW</span>
        </button>
      </div>
      <BottomNav />
    </>
  );
};

export default Cart;
