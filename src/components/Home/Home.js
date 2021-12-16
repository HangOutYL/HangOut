import React from "react";
import BrandLogo from "./BrandLogo";
import ButtomNav from "./ButtomNav";
import Categories from "./Categories";
import CoffeeCards from "./CoffeCards";
import LoggedUser from "./LoggedUser";
import Search from "./Search";

const Home = () => {
  return (
    <>
      <BrandLogo />
      <LoggedUser />
      <Search />
      <CoffeeCards />
      <Categories />
      <ButtomNav />
    </>
  );
};

export default Home;
