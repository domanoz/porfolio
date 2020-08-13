import React from "react";
import Navbar from "./components/Navbar";

import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <main>
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
