import React from "react";
import ProfilePic from "../../views/ProfilePictureVector.png";

const LoggedUser = () => {
  return (
    <div className="Profile">
      <img src={ProfilePic} alt="ProfilePic" />
    </div>
  );
};

export default LoggedUser;
