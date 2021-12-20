import React from "react";
import "./Cart.css";
import Coffee1 from "../../views/CoffeeImage1.png";

const Cart = () => {
  return (
    <div className="Cart">
      <br />
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
            <button className="Item-Plus">+</button>
            <span className="Item-Number">0</span>
            <button className="Item-Minus">-</button>
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
            <button className="Item-Plus">+</button>
            <span className="Item-Number">0</span>
            <button className="Item-Minus">-</button>
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
            <button className="Item-Plus">+</button>
            <span className="Item-Number">0</span>
            <button className="Item-Minus">-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
