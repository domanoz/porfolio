import React from "react";
import logo from "../img/logo-svg.svg";
import { FaAlignRight } from "react-icons/fa";
import PageLinks from "../constants/links";
import "../css/Navbar.css";

function Navbar({ toggleSidebar }) {
  return (
    <div className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <a href="/">
            <img src={logo} alt="Doman's logo" />
          </a>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </div>
  );
}

export default Navbar;
