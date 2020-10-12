import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//COMPONENTS
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/AdminDashboard";

//PAGES
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";

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
          <Route path="/admin" exact>
            <Login />
          </Route>
          <Route path="/admin/dashboard">
            <Dashboard />
          </Route>
          <Route path="/projects" exact>
            <Projects title="Projects" />
          </Route>
          <Route path="/about" exact>
            <About title="About" />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
