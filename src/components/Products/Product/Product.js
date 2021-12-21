import React from "react";
import "./Product.css";
import Coffee1Big from "../../../views/CoffeeImage1Big.png";

const Product = () => {
  return (
    <div className="Product">
      <img src={Coffee1Big} alt="CoffeeImage" />
      <div className="NameAndDesc">
        <span className="ProductName">Cappuccino</span>
        <span className="ProductDetails">Drizzled with Caramel</span>
        <span className="ProductDesc">
          A single espresso shot poured into hot foamy milk, with the surface
          topped with mildly sweetened cocoa powder and drizzled with
          scrumptious caramel syrup ... Read More
        </span>
      </div>
      <div className="MoreOptions">
        <span className="MoreOptionsTitle">Choice Of Milk</span>
        <div className="Tabs">
          <div className="Tab">
            <span className="TabText">Oat Milk</span>
          </div>
          <div className="Tab">
            <span className="TabText">Soy Milk</span>
          </div>
          <div className="Tab">
            <span className="TabText">Almond Milk</span>
          </div>
        </div>
      </div>
      <div className="PriceAndBuy">
        <div className="Price">
          <span className="PriceText">Price</span>
          <span className="PriceAmount">299$</span>
        </div>
        <button className="BuyNowBtn">BUY NOW</button>
      </div>
    </div>
  );
};

export default Product;
