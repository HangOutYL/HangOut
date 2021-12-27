import React from "react";
import Coffee1 from "../../views/CoffeeImage1.png";
import CouponCode from "../../views/Coupon2svg.svg";
import DashedLine from "../../views/DashedLineVector.png";
import BottomNav from "../../components/BottomNav/BottomNav";
import "./Cart.css";

const Cart = () => {
  return (
    <>
      <div className="Cart">
        <h2 className="Cart-Title">Cart</h2>
        <div className="Cart-Items">
          <div className="Item">
            <div className="Item-Desc">
              <img src={Coffee1} alt="item-img" className="item-img" />
              <div className="Item-Detail">
                <span className="Item-Title">Cappuccino</span>
                <span className="Item-Text">Dalgona Macha</span>
                <span className="Item-Price">1.99$</span>
              </div>
            </div>
            <div className="Item-Amount">
              <button className="Item-Minus">-</button>
              <span className="Item-Number">0</span>
              <button className="Item-Plus">+</button>
            </div>
          </div>
          <div className="Item">
            <div className="Item-Desc">
              <img src={Coffee1} alt="item-img" className="item-img" />
              <div className="Item-Detail">
                <span className="Item-Title">Cappuccino</span>
                <span className="Item-Text">Dalgona Macha</span>
                <span className="Item-Price">1.99$</span>
              </div>
            </div>
            <div className="Item-Amount">
              <button className="Item-Minus">-</button>
              <span className="Item-Number">0</span>
              <button className="Item-Plus">+</button>
            </div>
          </div>

          <div className="Item">
            <div className="Item-Desc">
              <img src={Coffee1} alt="item-img" className="item-img" />
              <div className="Item-Detail">
                <span className="Item-Title">Cappuccino</span>
                <span className="Item-Text">Dalgona Macha</span>
                <span className="Item-Price">1.99$</span>
              </div>
            </div>
            <div className="Item-Amount">
              <button className="Item-Minus">-</button>
              <span className="Item-Number">0</span>
              <button className="Item-Plus">+</button>
            </div>
          </div>

          <div className="Item">
            <div className="Item-Desc">
              <img src={Coffee1} alt="item-img" className="item-img" />
              <div className="Item-Detail">
                <span className="Item-Title">Cappuccino</span>
                <span className="Item-Text">Dalgona Macha</span>
                <span className="Item-Price">1.99$</span>
              </div>
            </div>
            <div className="Item-Amount">
              <button className="Item-Minus">-</button>
              <span className="Item-Number">0</span>
              <button className="Item-Plus">+</button>
            </div>
          </div>
        </div>
        <img src={DashedLine} alt="DashLine" className="DashLine" />
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
          <img src={DashedLine} alt="DashLine" className="DashLine" />
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
