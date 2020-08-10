import React from "react";
import heroimg from "../img/hero-img_2.1.1_6.1.1.jpg";
import "../css/Hero.css";

function Hero() {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info"></article>
        <div className="hero-image-main">
          <img className="hero-image" src={heroimg} alt="" />
          <video src="../img/hero-sky.mp4" autoPlay loop muted></video>
        </div>
      </div>
    </header>
  );
}

export default Hero;
