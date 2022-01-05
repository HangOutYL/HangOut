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

  // search bar function

  const { products } = useContext(ProductsContext);
  const [searchedProducts, setSearchedProducts] = useState([]);

  const handleInput = (e) => {
    const productSearchFilter =
      products &&
      products.filter((product) =>
        product.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
    setSearchedProducts(productSearchFilter);
    console.log(searchedProducts);
  };

  return (
    <>
      <div className="Home">
        <BrandLogo />
        <Search handleInput={handleInput} />
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
