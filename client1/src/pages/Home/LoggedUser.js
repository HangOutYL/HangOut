import React from "react";
import { Link } from "react-router-dom";
import ProfilePic from "../../views/ProfilePictureVector.png";

const LoggedUser = () => {
  return (
    <Link to={"/users/login"}>
      <div className="Profile">
        <img src={ProfilePic} alt="ProfilePic" />
      </div>
    </Link>
  );
};

export default LoggedUser;
