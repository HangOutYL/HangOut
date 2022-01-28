import React, { useContext, useState } from "react";
import "./Signup.css";
import BottomNav from "../../components/BottomNav/BottomNav";
import eye from "../../views/eye.png";
import UserContext from "../../Context/UserContext";

const Signup = () => {
  const { showPass, setShowPass, users, setUsers } = useContext(UserContext);
  // const [userData, setUserData] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);

  const handleShowPassword = (e) => {
    if (showPass) {
      setShowPass(false);
    } else {
      setShowPass(true);
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleFN = (e) => {
    setFirstName(e.target.value);
  };
  const handleLN = (e) => {
    setLastName(e.target.value);
  };

  const userSignup = () => {
    const existingUser = users.find((p) => p.email === email);
    if (!existingUser) {
      const newUser = {
        name: {
          firstName,
          lastName,
        },
        email,
        password,
      };
      setUsers([...users, newUser]);
      console.log(users);
    } else {
      alert("already signed up!");
    }
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
                onChange={handleFN}
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
                onChange={handleLN}
              />
            </label>
          </div>
          <div className="UserDetails">
            {/* <label htmlFor="Username">
              Username:
              <input
                className="Username"
                name="Username"
                id="Username"
                type="text"
                placeholder="Username"
              />
            </label> */}
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
                onChange={handlePassword}
              />
            </label>
            <button className="ShowPass" onClick={handleShowPassword}>
              <img className="Eye" src={eye} alt="" /> Show Password
            </button>
          </div>
          <label htmlFor="TOS">
            <input className="TOS" name="TOS" id="TOS" type="checkbox" /> I
            accept the terms of service.
          </label>
          <button className="SignupBtn" onClick={() => userSignup()}>
            SIGN UP
          </button>
        </span>
      </div>
      <BottomNav />
    </>
  );
};

export default Signup;
