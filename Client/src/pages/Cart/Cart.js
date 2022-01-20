import React, { useContext } from "react";
import CouponCode from "../../views/CouponVector.png";
import DashedLine from "../../views/DashedLineVector.png";
import BottomNav from "../../components/BottomNav/BottomNav";
import "./Cart.css";
import CartContext from "../../Context/CartContext";
//
const Cart = () => {
  const { cart, setCart, cartAmount, setCartAmount } = useContext(CartContext);

  const addProduct = (id) => {
    const addItem = cart.find((p) => p.id === id);
    addItem.amount = addItem.amount + 1;
    setCartAmount(cartAmount + 1);
  };

  const removeProduct = (id) => {
    const removeItem = cart.find((p) => p.id === id);
    if (removeItem.amount > 0) {
      removeItem.amount = removeItem.amount - 1;
      setCartAmount(cartAmount - 1);

      console.log(removeItem);
    }
    if (removeItem.amount === 0) {
      const newCart = cart.filter((item) => item.id !== id);
      console.log(newCart);
      setCart(newCart);
    }
  };

  const grandTotal = cart.reduce((acc, item) => {
    const totalPrice = item.price * item.amount;
    return acc + totalPrice;
  }, 0);

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
            <button className="Item-Minus" onClick={() => removeProduct(id)}>
              -
            </button>
            <span className="Item-Number">{amount}</span>
            <button className="Item-Plus" onClick={() => addProduct(id)}>
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
            <span className="Total-Price">${Math.round(grandTotal)}</span>
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
