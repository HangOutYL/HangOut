import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Home from "./pages/Home/Home";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3000/data.json`);
      const products = await res.json();
      console.log(products);
      setData(() => [...data, products]);
    };
    fetchData();
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default App;
