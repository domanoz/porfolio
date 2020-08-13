import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import { FaAngleDoubleRight } from "react-icons/fa";
import { connect } from "react-redux";
import * as actionCreators from "../actions";
import "../css/Jobs.css";

const Jobs = (props) => {
  const { jobs, getJobs } = props;

  useEffect(() => {
    getJobs();
  }, []);

  const [value, setValue] = React.useState(0);
  const { company, position, date, description } = jobs[value];
  return (
    <section className="section jobs">
      <Title title="expierence" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {description.map((item) => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            );
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  );
};

export default connect((state) => state, actionCreators)(Jobs);
