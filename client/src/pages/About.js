import React, { useEffect } from "react";
import { connect } from "react-redux";

import Title from "../components/Title";

import * as actionCreators from "../actions";
import aboutimg from "../img/about-img-main.png";

import "../css/About.css";

function About(props) {
  const { about, getAbout, title } = props;

  useEffect(() => {
    getAbout();
  }, [getAbout]);

  if (!about.length) {
    return <div> Loading ... </div>;
  }

  return (
    <section className="about-page">
      <div className="section-center about-center">
        <img className="about-img" src={aboutimg} alt="" />
        <article className="about-text">
          <Title title={title} />
          <p>{about[0].info}</p>
          <div className="about-stack">
            {about[0].stack.map((item) => {
              return <span key={item.id}>{item.title}</span>;
            })}
          </div>
        </article>
      </div>
    </section>
  );
}

export default connect((state) => state, actionCreators)(About);
