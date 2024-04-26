import React, { useContext } from "react";
import "./MyAccount.css";
import { useNavigate } from "react-router-dom";
import CoffeeImage from "./../../views/CoffeeImage1.png";
import { useState } from "react";
import LoggedInContext from "../../Context/LoggedInContext";

const MyAccount = () => {
  const navigate = useNavigate();
  const [logout, setLogout] = useState(false);
  const { setIsLogged } = useContext(LoggedInContext);

  const userLogout = () => {
    const fetchUserLogout = async () => {
      const res = await fetch("/api/users/logout", { method: "DELETE" });
      if (!res.ok) {
        alert("failed to log out");
      }
      await res.json();

      setIsLogged(false);
      setLogout(true);
      setTimeout(() => {
        setLogout(false);
      }, 4000);
      alert("logging out...");
      navigate("/users/login", { replace: true });
    };
    fetchUserLogout();
  };

  return (
    <div className="MyAccount">
      {logout && (
        <div>
          <span className="loggedout">logging out...</span>
        </div>
      )}
      <h1>My Account</h1>
      <div className="user-data">
        <div className="MyOrders">
          <h3>Last Orders:</h3>
          <div className="OrdersTable">
            <div className="purchase-text">
              No orders yet.. Make your first purchase!
            </div>
          </div>
          <h2>My Favorites</h2>
          <div className="user-favorites">
            <div className="fav-cards">
              <div className="fav-card">
                <img
                  src={CoffeeImage}
                  alt="CoffeeImage"
                  className="CoffeeImage"
                />
                <span className="Text">Dalgona Matcha</span>
                <div className="PriceAndCart">
                  <span className="Price">12.99</span>
                  <span>❤️</span>
                </div>
              </div>
              <div className="fav-card">
                <img
                  src={CoffeeImage}
                  alt="CoffeeImage"
                  className="CoffeeImage"
                />
                <span className="Text">Dalgona Matcha</span>
                <div className="PriceAndCart">
                  <span className="Price">12.99</span>
                  <span>❤️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <button className="Logout" onClick={userLogout}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default MyAccount;
