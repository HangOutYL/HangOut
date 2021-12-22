import React from "react";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import { Routes, Route } from "react-router-dom";
// import BottomNav from "./components/BottomNav/BottomNav";
import CoffeeDetails from "./pages/CoffeeDetails/CoffeeDetails";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<CoffeeDetails />} />
      </Routes>
      {/* <BottomNav /> */}
    </div>
  );
};

export default App;
