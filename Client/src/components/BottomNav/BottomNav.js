import React, { useContext } from "react";
import HomeButton from "../../views/HomeButtonVector.png";
import CartButton from "../../views/CartButtonVector.png";
import ProfilePic from "../../views/ProfilePictureVector.png";
import "./BottomNav.css";
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext";

const BottomNav = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="BottomNav">
      <Link to={"/"}>
        <button className="NavBtn">
          <img src={HomeButton} alt="HomeButton" />
        </button>
      </Link>
      <Link to={"/cart"}>
        <button type="button" className="NavBtn">
          <img src={CartButton} alt="CartButton" />
          <div className="Cart-Amount">{cart.length}</div>
        </button>
      </Link>
      <button className="NavBtn">
        <img src={ProfilePic} alt="ProfilePic" className="ProfilePic" />
      </button>
    </div>
  );
};

export default BottomNav;