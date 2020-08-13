import React, { useEffect } from "react";
import Title from "./Title";
import Project from "./Project";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import * as actionCreators from "../actions";
import "../css/Projects.css";

const Projects = (props) => {
  const { projects, getProjects, title, showLink } = props;

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={project.index} index={index} {...project} />;
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  );
};

export default connect((state) => state, actionCreators)(Projects);
