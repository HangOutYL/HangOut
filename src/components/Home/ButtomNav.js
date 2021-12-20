import React from "react";
import HomeButton from "../../views/HomeButtonVector.png";
import CartButton from "../../views/CartButtonVector.png";
import ProfilePic from "../../views/ProfilePictureVector.png";

const ButtomNav = () => {
  return (
    <div className="ButtomNav">
      <button className="NavBtn">
        <img src={HomeButton} alt="HomeButton" />
      </button>
      <button className="NavBtn">
        <img src={CartButton} alt="CartButton" />
      </button>
      <button className="NavBtn">
        <img src={ProfilePic} alt="ProfilePic" className="ProfilePic" />
      </button>
    </div>
  );
};

export default ButtomNav;
