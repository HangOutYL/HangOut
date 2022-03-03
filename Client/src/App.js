import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import ProductsContext from "./Context/ProductsContext";
import CartContext from "./Context/CartContext";
import UserContext from "./Context/UserContext";
import MyAccount from "./pages/MyAccount/MyAccount";
import LoggedInContext from "./Context/LoggedInContext";
// import { useCookies } from "react-cookie";

const App = () => {
  const [products, setProducts] = useState();
  const [users, setUsers] = useState();
  const [searchedProducts, setSearchedProducts] = useState(products);
  const [cartAmount, setCartAmount] = useState(0);
  const [cart, setCart] = useState([]);
  const [noMatch, setNoMatch] = useState(false);
  const [showPass, setShowPass] = useState(true);
  const [loggedUserName, setLoggedUserName] = useState([]);
  const [loggedUserEmail, setLoggedUserEmail] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // const res = await fetch(`https://api.npoint.io/4b5384c6f07519b8aaa6`);
      const res = await fetch(`/api/products`);
      const data = await res.json();
      if (data.length) {
        setProducts(data);
        setSearchedProducts(data);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchUsersData = async () => {
  //     const res = await fetch(`/api/users`);
  //     const data = await res.json();
  //     if (data.length) {
  //       setUsers(data);
  //     }
  //   };
  //   fetchUsersData();
  // }, []);

  const UniqueCategories =
    products &&
    products
      .map((cat) => cat.category)
      .filter((category, index, array) => array.indexOf(category) === index);

  const addToCart = (id, title, image, price, category, milk) => {
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

  // const handleCookie = (e) => {
  //   setCookie("user", "gowtham", {
  //     path: "/",
  //   });
  //   console.log(cookies);
  // };

  return (
    <LoggedInContext.Provider
      value={{
        loggedUserName,
        setLoggedUserName,
        loggedUserEmail,
        setLoggedUserEmail,
      }}
    >
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
          <UserContext.Provider
            value={{ showPass, setShowPass, users, setUsers }}
          >
            <div className="app">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/users/login" element={<Login />} />
                <Route path="/MyAccount" element={<MyAccount />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </div>
          </UserContext.Provider>
        </CartContext.Provider>
      </ProductsContext.Provider>
    </LoggedInContext.Provider>
  );
};

export default App;
