import React, { useContext, useEffect, useState } from "react";
import BottomNav from "../../components/BottomNav/BottomNav";
import BrandLogo from "./BrandLogo";
import Categories from "./Categories";
import Products from "../../components/Products/Products";
import "./home.css";
import Search from "./Search";
import ProductsContext from "../../Context/ProductsContext";

const Home = () => {
  const { UniqueCategories } = useContext(ProductsContext);
  const [categories, setCategories] = useState();

  useEffect(() => {
    setCategories(() => UniqueCategories);
  }, [UniqueCategories]);

  return (
    <>
      <div className="Home">
        <BrandLogo />
        <Search />
        <div className="CateProd">
          <Categories names={categories} />
          <Products />
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default Home;
