import React from "react";
import { Router } from "react-router-dom";
import Routes from "./routes";
import DefaultLayout from "./components/Layout";
import history from "./services/history";
import "./App.css";

const App = () => {
  return (
    <Router history={history}>
      <DefaultLayout>
        <Routes />
      </DefaultLayout>
    </Router>
  );
};

export default App;
