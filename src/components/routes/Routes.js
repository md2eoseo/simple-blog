import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Project from "./Project";
import Recent from "./Recent";
import RecentPost from "./RecentPost";
import Contact from "./Contact";

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
      <Route exact path="/recent/:id">
        <RecentPost />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
}

export default Routes;
