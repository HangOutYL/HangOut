import React from "react";
import BottomNav from "../../components/BottomNav/BottomNav";
import BrandLogo from "./BrandLogo";
import Categories from "./Categories";
import Products from "../../components/Products/Products";
import "./home.css";
// import LoggedUser from "./LoggedUser";
import Search from "./Search";

const Home = () => {
  return (
    <>
      <div className="Home">
        <BrandLogo />
        {/* <LoggedUser /> */}

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
