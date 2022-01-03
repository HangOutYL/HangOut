import React from "react";
import { useEffect, useState } from "react";
import ProductsContext from "../../Context/ProductsContext";
import BottomNav from "../../components/BottomNav/BottomNav";
import BrandLogo from "./BrandLogo";
import Categories from "./Categories";
import Products from "../../components/Products/Products";
import "./home.css";
import Search from "./Search";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/data.json`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  });

  return (
    <>
      <div className="Home">
        <BrandLogo />
        <Search />
        <div className="CateProd">
          <ProductsContext.Provider value={[products, setProducts]}>
            <Categories />
            <Products />
          </ProductsContext.Provider>
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default Home;
