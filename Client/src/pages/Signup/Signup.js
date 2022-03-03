import React, { useContext, useState } from "react";
import "./Signup.css";
import BottomNav from "../../components/BottomNav/BottomNav";
import eye from "../../views/eye.png";
import UserContext from "../../Context/UserContext";
import LoggedInContext from "../../Context/LoggedInContext";

const Signup = () => {
  const { setLoggedUserName, setLoggedUserEmail } = useContext(LoggedInContext);
  const { showPass, setShowPass } = useContext(UserContext);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [success, setSuccess] = useState(false);
  const [userExist, setUserExist] = useState(false);

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

  // creating a user in loggedIn Context

  setLoggedUserName(firstName, lastName);
  setLoggedUserEmail(email);

  //

  const userSignup = () => {
    const fetchUserSignup = async () => {
      const postData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: {
            firstName,
            lastName,
          },
          email,
          password,
        }),
      };

      const res = await fetch("/api/users", postData);
      if (!res.ok) {
        setSuccess(false);
        setUserExist(true);
        setTimeout(() => {
          setUserExist(false);
        }, 4000);
      }
      await res.json();
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    };
    fetchUserSignup();
  };

  return (
    <>
      <div className="Signup">
        {success && (
          <div>
            <span className="Success"> Success !</span>
          </div>
        )}
        {userExist && (
          <div>
            <span className="userExist">User Already Exist, Please Log In</span>
          </div>
        )}
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
            Sign Up
          </button>
        </span>
      </div>
      <BottomNav />
    </>
  );
};

export default Signup;
