import React, { useEffect } from "react";
import { initializeLogger } from "common/logger";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Logger from "js-logger";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import { ToastContainer } from "react-toastify";

const App = () => {
  useEffect(() => {
    initializeLogger();
    Logger.info("Log from js-logger");
  }, []);

  return (
    <Router>
      <ToastContainer />
      <NavBar />
      <Switch>
        <Route exact path="/" render={Dashboard} />
        <Route exact path="/about" render={() => <div>About new things</div>} />
      </Switch>
    </Router>
  );
};

export default App;
