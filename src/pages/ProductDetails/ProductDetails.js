import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ArrowBack from "../../views/ArrowBackVector.png";
// import Coffee1Big from "../../views/CoffeeImage1Big.png";
import "./ProductDetails.css";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:8080/coffees/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    fetchData();
  }, [id]);

  return (
    product && (
      <div className="Product">
        <img src={product.image} alt="CoffeeImage" className="BigPicture" />
        <Link to={"/"}>
          <img src={ArrowBack} alt="ArrowBack" className="ArrowBack" />
        </Link>
        <div className="NameAndDesc">
          <span className="ProductName">{product.category}</span>
          <span className="ProductDetails">{product.title}</span>
          <span className="ProductDesc">{product.description}</span>
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
            <span className="PriceAmount">{product.price}</span>
          </div>
          <button className="BuyNowBtn">
            <span className="BuyBtnText">BUY NOW</span>
          </button>
        </div>
      </div>
    )
  );
};

export default ProductDetails;
