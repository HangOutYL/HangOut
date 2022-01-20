import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import BottomNav from "../../components/BottomNav/BottomNav";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const handleSubmit = () => {
    alert("Submitted!");
  };

  // handlePassword = () => {};

  return (
    <>
      <div className="Login">
        <h1>Sign In</h1>
        <form className="SignIn" onSubmit={handleSubmit}>
          <label for="User">Username:</label>
          <input
            id="User"
            name="User"
            className="UserLogin"
            placeholder="Enter Email"
            type="email"
          />
          <div>
            <label for="Password">Password:</label>
            <input
              id="Password"
              name="Password"
              className="PasswordLogin"
              type="password"
              placeholder="Enter Password"
            />
            <i class="far fa-eye"></i>
          </div>
          <label for="Remember-Info">
            <input type="checkbox" id="Remember-Info"></input> Remember me
          </label>
          <button className="SignInBtn">Sign In</button>
        </form>
        <div className="Links">
          <a href="">Forgot Password?</a>
          <Link to={"/signup"}>
            <span>Don't have an account? Sign Up</span>
          </Link>
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default Login;
