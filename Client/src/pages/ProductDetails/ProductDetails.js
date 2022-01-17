import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import CartContext from "../../Context/CartContext";
import ArrowBack from "../../views/ArrowBackVector.png";
import "./ProductDetails.css";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:8080/coffees/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    fetchData();
  }, [id]);

  const milkChoice = (e) => {
    const { milk } = product;
    if (!milk.length) {
      milk.push(e.target.value);
    }
  };

  return (
    product && (
      <div className="Product">
        <div className="Top">
          <img src={product.image} alt="CoffeeImage" className="BigPicture" />
          <Link to={"/"}>
            <img src={ArrowBack} alt="ArrowBack" className="ArrowBack" />
          </Link>
        </div>
        <div className="NameAndDesc">
          <span className="ProductName">{product.category}</span>
          <span className="ProductDetails">{product.title}</span>
          <span className="ProductDesc">{product.description}</span>
        </div>
        <div className="MoreOptions">
          <span className="MoreOptionsTitle">Choice Of Milk</span>
          <div className="Tabs">
            <div className="Tab">
              <button className="TabText" value={"oat"} onClick={milkChoice}>
                Oat Milk
              </button>
            </div>
            <div className="Tab">
              <button className="TabText" value={"soy"} onClick={milkChoice}>
                Soy Milk
              </button>
            </div>
            <div className="Tab">
              <button className="TabText" value={"almond"} onClick={milkChoice}>
                Almond Milk
              </button>
            </div>
          </div>
        </div>
        <div className="PriceAndBuy">
          <div className="Price">
            <span className="PriceText">Price</span>
            <span className="PriceAmount">${product.price}</span>
          </div>
          <button className="BuyNowBtn">
            <span
              className="BuyBtnText"
              onClick={() =>
                addToCart(
                  product.id,
                  product.title,
                  product.image,
                  product.price,
                  product.category
                )
              }
            >
              BUY NOW
            </span>
          </button>
        </div>
      </div>
    )
  );
};

export default ProductDetails;
