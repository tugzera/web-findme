import React from "react";
import "./config/ReactotronConfig";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";
import Routes from "./routes";
import DefaultLayout from "./components/Layout";
import history from "./services/history";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <DefaultLayout>
            <Routes />
          </DefaultLayout>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
