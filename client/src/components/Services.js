import React, { useEffect } from "react";
import Title from "./Title";
import "../css/Service.css";
import { connect } from "react-redux";
import * as actionCreators from "../actions";

const Services = (props) => {
  const { services, getServices } = props;

  useEffect(() => {
    // getServices();
  }, []);

  return (
    <section className="section bg-grey">
      <Title title="services" />
      <div className="section-center services-center">
        {services.map((service) => {
          return (
            <article key={service.id} className="service">
              {service.icon}
              <h4>{service.title}</h4>
              <div className="underline"></div>
              <p>{service.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default connect((state) => state, actionCreators)(Services);
