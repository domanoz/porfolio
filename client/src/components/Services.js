import React, { useEffect } from "react";
import Title from "./Title";
import "../css/Service.css";
import { connect } from "react-redux";
import * as actionCreators from "../actions";
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa";

const Services = (props) => {
  const { services, getServices } = props;

  useEffect(() => {
    getServices();
  }, [getServices]);

  return (
    <section className="section bg-grey">
      <Title title="services" />
      <div className="section-center services-center">
        {services.map((service) => {
          return (
            <article key={service.id} className="service">
              {service.icon === "FaCode" ? (
                <FaCode className="service-icon" />
              ) : service.icon === "FaSketch" ? (
                <FaSketch className="service-icon" />
              ) : (
                <FaAndroid className="service-icon" />
              )}
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
