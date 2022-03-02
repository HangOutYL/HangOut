import React, { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import "./Login.css";
import BottomNav from "../../components/BottomNav/BottomNav";
import eye from "../../views/eye.png";
import UserContext from "../../Context/UserContext";

const Login = () => {
  const { showPass, setShowPass } = useContext(UserContext);
  const [cookies, setCookie] = useCookies(["user"]);

  const handlePassword = () => {
    if (showPass) {
      setShowPass(false);
    } else {
      setShowPass(true);
    }
  };

  const [userEmail, setUserEmail] = useState([]);
  const [userPass, setUserPass] = useState([]);

  const handleUserEmail = (e) => {
    setUserEmail(e.target.value);
  };
  const handleUserPass = (e) => {
    setUserPass(e.target.value);
  };

  const UserLogin = () => {
    // const user = users.find((u) => u.email === userEmail);
    // if (user) {
    const fetchUserLogin = async () => {
      const postData = {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          password: userPass,
        }),
      };
      const res = await fetch("/api/users/login", postData);
      await res.json();
      // console.log(cookies);
    };
    setCookie("user", userEmail, {
      path: "/",
    });
    fetchUserLogin();
  };

  // const handleCookie = () => {
  //   setCookie("user", userEmail, {
  //     path: "/",
  //   });
  //   console.log(cookies);
  // };

  return (
    <>
      <div className="Login">
        <h1>Log In</h1>
        <span className="SignIn">
          <label htmlFor="User">Username:</label>
          <input
            id="User"
            name="User"
            className="UserLogin"
            placeholder="Enter Email"
            autoComplete="username"
            type="email"
            onChange={handleUserEmail}
          />
          <div>
            <label htmlFor="Password">Password:</label>
            <input
              id="Password"
              name="Password"
              className="PasswordLogin"
              type={showPass ? "password" : "text"}
              placeholder="Enter Password"
              autoComplete="Password"
              onChange={handleUserPass}
            />
            <button className="ShowPass" onClick={handlePassword}>
              <img className="Eye" src={eye} alt="" /> Show Password
            </button>
          </div>
          <label htmlFor="Remember-Info">
            <input type="checkbox" id="Remember-Info" /> Remember me
          </label>
          <button className="SignInBtn" onClick={UserLogin}>
            Sign In
          </button>
        </span>
        <div className="Links">
          <a href="/">Forgot Password?</a>
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
