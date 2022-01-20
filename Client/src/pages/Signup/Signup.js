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
      <div className="Login">
        <h1>Sign Up</h1>
        <form className="Signup" onSubmit={handleSubmit}></form>
      </div>
      <BottomNav />
    </>
  );
};

export default Signup;
