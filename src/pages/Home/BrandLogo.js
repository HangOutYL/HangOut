import React from "react";
import LoggedUser from "./LoggedUser";

const BrandLogo = () => {
  return (
    <div className="TopBar">
      <div className="Logo">
        <span className="Cafe">Cafe</span>
        <span className="Hangout">HangOut</span>
      </div>
      <LoggedUser />
    </div>
  );
};

export default BrandLogo;
