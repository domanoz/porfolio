import React from "react";
import logo from "../img/LogoMDbig.jpg";
import { FaAlignRight } from "react-icons/fa";
import "../css/Navbar.css";

function Header() {
  return (
    <div className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Doman's logo" />

          <button type="button" className="toggle-btn">
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
