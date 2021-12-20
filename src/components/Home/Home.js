import React from "react";
import BrandLogo from "./BrandLogo";
import ButtomNav from "./ButtomNav";
import Categories from "./Categories";
import CoffeeCards from "./CoffeeCards";
import LoggedUser from "./LoggedUser";
import Search from "./Search";
import "./home.css";

const Home = () => {
  return (
    <div className="Home">
      <BrandLogo />
      <LoggedUser />
      <Search />
      <CoffeeCards />
      <Categories />
      <ButtomNav />
    </div>
  );
};

export default Home;
