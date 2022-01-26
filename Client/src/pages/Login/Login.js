import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import BottomNav from "../../components/BottomNav/BottomNav";
import eye from "../../views/eye.png";
import UserContext from "../../Context/UserContext";

const Login = () => {
  const { showPass, setShowPass } = useContext(UserContext);

  const handlePassword = () => {
    if (showPass) {
      setShowPass(false);
    } else {
      setShowPass(true);
    }
  };

  return (
    <>
      <div className="Login">
        <h1>Sign In</h1>
        <span className="SignIn">
          <label htmlFor="User">Username:</label>
          <input
            id="User"
            name="User"
            className="UserLogin"
            placeholder="Enter Email"
            autocomplete="username"
            type="email"
          />
          <div>
            <label htmlFor="Password">Password:</label>
            <input
              id="Password"
              name="Password"
              className="PasswordLogin"
              type={showPass ? "password" : "text"}
              placeholder="Enter Password"
              autocomplete="Password"
            />
            <button className="ShowPass" onClick={handlePassword}>
              <img className="Eye" src={eye} alt="" /> Show Password
            </button>
          </div>
          <label htmlFor="Remember-Info">
            <input type="checkbox" id="Remember-Info" /> Remember me
          </label>
          <button className="SignInBtn">Sign In</button>
        </span>
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
