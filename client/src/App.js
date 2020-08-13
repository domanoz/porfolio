import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Jobs from "./components/Jobs";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Navbar />
          <Hero />
          <Services />
          <Jobs />
          <Projects title="Projects" />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
