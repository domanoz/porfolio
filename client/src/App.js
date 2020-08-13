import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Jobs from "./components/Jobs";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Switch>
        <Route path="/">
          <Navbar toggleSidebar={toggleSidebar} />
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
          <Hero />
          <Jobs />
          <Services />
          <Projects title="Projects" />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
