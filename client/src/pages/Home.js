import React from "react";

import Jobs from "../components/Jobs";
import Projects from "../components/Projects";
import Hero from "../components/Hero";
import Services from "../components/Services";

function Home() {
  return (
    <>
      <Hero />
      <Jobs />
      <Services />
      <Projects title="Projects" />
    </>
  );
}

export default Home;
