import React from "react";
import HomeButton from "../../views/HomeButtonVector.png";
import CartButton from "../../views/CartButtonVector.png";

const ButtomNav = () => {
  return (
    <div className="ButtomNav">
      <img src={HomeButton} alt="HomeButton" />
      <img src={CartButton} alt="CartButton" />
    </div>
  );
};

export default ButtomNav;
