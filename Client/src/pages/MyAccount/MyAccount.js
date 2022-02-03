import React from "react";
import "./MyAccount.css";

const MyAccount = () => {
  return (
    <div className="MyAccount">
      <h1>My Account</h1>
      <div className="MyOrders">
        <h3>Last Orders:</h3>
        <table className="OrdersTable">
          <thead>Orders</thead>
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
      </div>
    </div>
  );
};

export default MyAccount;
