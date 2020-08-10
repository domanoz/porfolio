import React from "react";
import { Link } from "react-router-dom";
import heroimg from "../img/hero-img-main.png";
import SocialLinks from "../constants/socialLinks";
import "../css/Hero.css";

function Hero() {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>i'm mikołaj</h1>
            <h4>fullstack javascript developer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>

        <img className="hero-img" src={heroimg} alt="" />
      </div>
    </header>
  );
}

export default Hero;
