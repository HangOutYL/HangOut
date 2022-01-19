import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Home from "./pages/Home/Home";
import ProductsContext from "./Context/ProductsContext";
import CartContext from "./Context/CartContext";

const App = () => {
  const [products, setProducts] = useState();
  const [searchedProducts, setSearchedProducts] = useState(products);
  const [cartAmount, setCartAmount] = useState(0);
  const [cart, setCart] = useState([]);
  const [noMatch, setNoMatch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // const res = await fetch(`https://api.npoint.io/4b5384c6f07519b8aaa6`);
      const res = await fetch(`http://localhost:8080/coffees`);
      const data = await res.json();
      if (data.length) {
        setProducts(data);
        setSearchedProducts(data);
      }
    };
    fetchData();
  }, []);

  const UniqueCategories =
    products &&
    products
      .map((cat) => cat.category)
      .filter((category, index, array) => array.indexOf(category) === index);

  const addToCart = (id, title, image, price, category, milk) => {
    // const existingProduct = products.find((p) => p.id === id);
    const cartProduct = cart.find((p) => p.id === id);
    if (!cartProduct) {
      const newCartProduct = {
        id,
        title,
        image,
        price,
        category,
        milk,
        amount: 1,
      };
      setCart([...cart, newCartProduct]);
      setCartAmount(cartAmount + 1);
    } else {
      cartProduct.amount = cartProduct.amount + 1;
      setCartAmount(cartAmount + 1);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        UniqueCategories,
        searchedProducts,
        setSearchedProducts,
        noMatch,
        setNoMatch,
      }}
    >
      <CartContext.Provider
        value={{ cart, setCart, cartAmount, setCartAmount, addToCart }}
      >
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </CartContext.Provider>
    </ProductsContext.Provider>
  );
};

export default App;
