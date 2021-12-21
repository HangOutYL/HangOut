import React from "react";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";
const App = () => {
  return (
    <div className="app">
      <Home />
      <Products />
      <Cart />
    </div>
  );
};

export default App;
