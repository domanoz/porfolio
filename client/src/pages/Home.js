import React from "react";
import Projects from "../components/Projects";
import Jobs from "../components/Jobs";
import Hero from "../components/Hero";
import Services from "../components/Services";

const Home = (props) => {
  return (
    <>
      <Hero />
      <Services />
      <Jobs />
      <Projects title="Projects" />
    </>
  );
};

export default Home;
