import React, { useContext, useState } from "react";
import "./Signup.css";
import BottomNav from "../../components/BottomNav/BottomNav";
import eye from "../../views/eye.png";
import UserContext from "../../Context/UserContext";

const Signup = () => {
  const { showPass, setShowPass } = useContext(UserContext);

  const handlePassword = () => {
    if (showPass) {
      setShowPass(false);
    } else {
      setShowPass(true);
    }
  };

  const [email, setEmail] = useState([]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div className="Signup">
        <h1>Sign Up</h1>
        <span className="SignSection">
          <div className="NameDetails">
            <label htmlFor="FN">
              First Name:
              <input
                className="FirstName"
                name="FN"
                id="FN"
                type="text"
                placeholder="First Name"
              />
            </label>
            <label htmlFor="LN">
              Last Name:
              <input
                className="LastName"
                name="LN"
                id="LN"
                type="text"
                placeholder="Last Name"
              />
            </label>
          </div>
          <div className="UserDetails">
            <label htmlFor="Email">
              Email Address:
              <input
                className="Email"
                name="Email"
                id="Email"
                type="email"
                placeholder="Email Address"
                onChange={handleEmail}
              />
            </label>
            <label htmlFor="SignupPass">
              Password:
              <input
                className="SignupPass"
                name="SignupPass"
                id="SignupPass"
                type={showPass ? "password" : "text"}
                placeholder="Password"
                autoComplete="SignupPass"
              />
            </label>
            <button className="ShowPass" onClick={handlePassword}>
              <img className="Eye" src={eye} alt="" /> Show Password
            </button>
          </div>
          <label htmlFor="TOS">
            <input className="TOS" name="TOS" id="TOS" type="checkbox" /> I
            accept the terms of service.
          </label>
          <button className="SignupBtn">SIGN UP</button>
        </span>
      </div>
      <BottomNav />
    </>
  );
};

export default Signup;
