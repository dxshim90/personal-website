import React from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Header from "./Components/Header";

//Pages
import Welcome from "./Pages/Welcome";
import Projects from "./Pages/Projects";
import About from "./Pages/about";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/personal-website" component={Welcome}></Route>
          <Route exact path="/projects" component={Projects}></Route>
          <Route exact path="/about" component={About}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
