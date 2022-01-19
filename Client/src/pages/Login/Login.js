import React from "react";
import "./Login.css";
import BottomNav from "../../components/BottomNav/BottomNav";

const Login = () => {
  return (
    <>
      <div className="Login">
        <h1>Sign In</h1>
        <form className="SignIn">
          <label for="User">Username:</label>
          <input
            id="User"
            className="UserLogin"
            placeholder="Enter Email"
            type="email"
          />
          <div>
            <label for="Password">Password:</label>
            <input
              id="Password"
              className="PasswordLogin"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <label for="Remember-Info">
            <input type="checkbox" id="Remember-Info"></input>Remember me
          </label>
          <button className="SignInBtn">Sign In</button>
        </form>
        <div className="Links">
          <a href="">Forgot Password?</a>
          <a href="">Don't have an account? Sign Up</a>
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default Login;
