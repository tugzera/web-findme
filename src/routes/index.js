import React from "react";
import { Switch } from "react-router";
import Route from "./Route";

import Home from "../pages/home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
