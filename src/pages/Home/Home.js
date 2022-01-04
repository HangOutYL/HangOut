import React, { useContext, useEffect } from "react";
import BottomNav from "../../components/BottomNav/BottomNav";
import BrandLogo from "./BrandLogo";
import Categories from "./Categories";
import Products from "../../components/Products/Products";
import "./home.css";
import Search from "./Search";
import ProductsContext from "../../Context/ProductsContext";

const Home = () => {
  const products = useContext(ProductsContext);
  useEffect(() => {
    products?.map((p) => <div key={p.id}>{p.category}</div>);
  }, []);

  console.log("home products", products);

  return (
    <>
      <div className="Home">
        <BrandLogo />
        <Search />
        <div className="CateProd">
          <Categories />
          <Products />
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default Home;
