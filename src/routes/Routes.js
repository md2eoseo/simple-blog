import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import Project from "../components/Project";
import Recent from "../components/Recent";
import Contact from "../components/Contact";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/project">
        <Project />
      </Route>
      <Route exact path="/recent">
        <Recent />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
}

export default Routes;
