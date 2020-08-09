import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Navbar></Navbar>
        <Route path="/" exact>
          <div className="App"></div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
