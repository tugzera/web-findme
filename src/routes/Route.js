import React from "react";
import { Route as RouteWrapper } from "react-router-dom";

const Route = ({ component: Component, ...rest }) => {
  return <RouteWrapper {...rest} component={Component} />;
};

export default Route;
