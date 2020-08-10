import React from "react";
import heroimg from "../img/AEWL3776.JPG";

import "../css/Hero.css";

function Hero() {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info"></article>

        <img className="hero-img" src={heroimg} alt="" />
      </div>
    </header>
  );
}

export default Hero;
