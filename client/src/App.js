import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Jobs from "./components/Jobs";
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
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
