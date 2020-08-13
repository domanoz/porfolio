import React from "react";
import SocialLinks from "../constants/socialLinks";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>
          copyright&copy;{new Date().getFullYear()}
          <span> Doman </span> all rights reserved
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
