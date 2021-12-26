import React from "react";
import BottomNav from "../../components/BottomNav/BottomNav";
import BrandLogo from "./BrandLogo";
import Categories from "./Categories";
// import CoffeeCards from "./CoffeeCards";
import Products from "../../components/Products/Products";
import "./home.css";
import LoggedUser from "./LoggedUser";
import Search from "./Search";

const Home = () => {
  return (
    <div className="Home">
      <BrandLogo />
      <LoggedUser />
      <Search />
      {/* <CoffeeCards /> */}
      <Products />
      <Categories />
      <BottomNav />
    </div>
  );
};

export default Home;
