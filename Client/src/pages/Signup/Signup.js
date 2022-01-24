import React from "react";
import "./Signup.css";
import BottomNav from "../../components/BottomNav/BottomNav";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
  const handleSubmit = () => {
    alert("Submitted!");
  };

  // handlePassword = () => {};

  return (
    <>
      <div className="Signup">
        <h1>Sign Up</h1>
        <form className="SignSection" onSubmit={handleSubmit}>
          <div className="NameDetails">
            <label for="FN">
              First Name:
              <input
                className="FirstName"
                name="FN"
                type="text"
                placeholder="First Name"
              ></input>
            </label>
            <label for="LN">
              Last Name:
              <input
                className="LastName"
                name="LN"
                type="text"
                placeholder="Last Name"
              ></input>
            </label>
          </div>
          <div className="UserDetails">
            <label for="Email">
              Email Address:
              <input
                className="Email"
                name="Email"
                type="email"
                placeholder="Email Address"
              ></input>
            </label>
            <label for="SignupPass">
              Password:
              <input
                className="SignupPass"
                name="SignupPass"
                type="password"
                placeholder="Password"
              ></input>
            </label>
          </div>
          <label for="TOS">
            <input className="TOS" name="TOS" type="checkbox"></input> I accept
            the terms of service.
          </label>
          <button className="SignupBtn">SIGN UP</button>
        </form>
      </div>
      <BottomNav />
    </>
  );
};

export default Signup;
