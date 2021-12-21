import React from "react";
import "./Product.css";
import Coffee1Big from "../../../views/CoffeeImage1Big.png";
import ArrowBack from "../../../views/ArrowBackVector.png";

const Product = () => {
  return (
    <div className="Product">
      <img src={Coffee1Big} alt="CoffeeImage" className="BigPicture" />
      <img src={ArrowBack} alt="ArrowBack" className="ArrowBack" />

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
            <button className="TabText">Oat Milk</button>
          </div>
          <div className="Tab">
            <button className="TabText">Soy Milk</button>
          </div>
          <div className="Tab">
            <button className="TabText">Almond Milk</button>
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
