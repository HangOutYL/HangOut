import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Home from "./pages/Home/Home";
import { ProductsContext } from "./Context/ProductsContext";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3000/data.json`);
      const data = await res.json();
      console.log("products:", data);
      setProducts(() => [...products, data]);
    };
    fetchData();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </ProductsContext.Provider>
  );
};

export default App;
