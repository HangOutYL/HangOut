import React from "react";
import Coffee1 from "../../views/CoffeeImage1.png";

const CoffeeCards = () => {
  return (
    <div className="CoffeeCards">
      <div className="Card">
        <img src={Coffee1} alt="CoffeeImage" />
        <span className="Text">Some Text</span>
        <div className="PriceAndCart">
          <span className="Price">1.99$</span>
          <button className="AddToCart">+</button>
        </div>
      </div>
      <div className="Card">
        <img src={Coffee1} alt="CoffeeImage" />
        <span className="Text">Some Text</span>
        <div className="PriceAndCart">
          <span className="Price">1.99$</span>
          <button className="AddToCart">+</button>
        </div>
      </div>
      <div className="Card">
        <img src={Coffee1} alt="CoffeeImage" />
        <span className="Text">Some Text</span>
        <div className="PriceAndCart">
          <span className="Price">1.99$</span>
          <button className="AddToCart">+</button>
        </div>
      </div>
      <div className="Card">
        <img src={Coffee1} alt="CoffeeImage" />
        <span className="Text">Some Text</span>
        <div className="PriceAndCart">
          <span className="Price">1.99$</span>
          <button className="AddToCart">+</button>
        </div>
      </div>
      <div className="Card">
        <img src={Coffee1} alt="CoffeeImage" />
        <span className="Text">Some Text</span>
        <div className="PriceAndCart">
          <span className="Price">1.99$</span>
          <button className="AddToCart">+</button>
        </div>
      </div>
      <div className="Card">
        <img src={Coffee1} alt="CoffeeImage" />
        <span className="Text">Some Text</span>
        <div className="PriceAndCart">
          <span className="Price">1.99$</span>
          <button className="AddToCart">+</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCards;
