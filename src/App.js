import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import CoffeeDetails from "./pages/CoffeeDetails/CoffeeDetails";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<CoffeeDetails />} />
      </Routes>
    </div>
  );
};

export default App;
