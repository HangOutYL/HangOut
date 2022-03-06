import React from "react";
import "./MyAccount.css";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
  const navigate = useNavigate();

  const userLogout = () => {
    const fetchUserLogout = async () => {
      const res = await fetch("/api/users/logout", { method: "DELETE" });
      await res.json();
      if (!res.ok) {
        alert("failed to log out");
      }

      navigate("/users/login", { replace: true });

      // setTimeout(() => {
      //  setLogout(false);
      // }, 4000);
    };
    fetchUserLogout();
  };

  return (
    <div className="MyAccount">
      <h1>My Account</h1>
      <div className="MyOrders">
        <h3>Last Orders:</h3>
        <table className="OrdersTable">
          <thead>Orders:</thead>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
        </table>
        <button className="Logout" onClick={userLogout}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default MyAccount;
