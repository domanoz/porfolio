import React from "react";
// import PropTypes from "prop-types";
import "../css/Projects.css";
// import Image from "gatsby-image";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";

const Project = ({ description, title, github, stack, url, image, index }) => {
  return (
    <article className="project">
      <img src={image} alt="Projectimage" className="project-img" />
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title || "default title"}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map((item, index) => {
            return <span key={index}>{item.title}</span>;
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
